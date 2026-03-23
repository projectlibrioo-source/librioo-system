package org.example.projectlibrioo.Service.Transactions;

import org.example.projectlibrioo.Model.Fines;
import org.example.projectlibrioo.Model.ReturnDTO;
import org.example.projectlibrioo.Model.Transactions;
import org.example.projectlibrioo.Repository.FineRepo;
import org.example.projectlibrioo.Repository.TransactionRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TransactionServiceTest {

    @Mock
    private TransactionRepo transactionRepo;

    @Mock
    private FineRepo fineRepo;

    @InjectMocks
    private TransactionService transactionService;

    private Transactions testTransaction;

    @BeforeEach
    void setUp() {
        testTransaction = new Transactions();
        testTransaction.setLibraryId(1);
        testTransaction.setBookId(101);
        testTransaction.setCategory("Student");
        testTransaction.setBorrowDate(LocalDate.now());
        testTransaction.setReturnDate(LocalDate.now().plusDays(14));
        testTransaction.setStatus("Pending");
    }

    @Test
    void testCheckEligibility_WithEmptyFinesTable() {
        // Arrange: Simulate the Fines table being empty (our recent bug fix target!)
        when(transactionRepo.getBorrowedData(1)).thenReturn(Collections.emptyList());
        when(fineRepo.findByCategory("Student")).thenReturn(null);

        // Act
        Boolean isEligible = transactionService.checkEligibility(testTransaction);

        // Assert: It should default to max 5 loans and return true
        assertTrue(isEligible);
    }

    @Test
    void testCheckEligibility_ExceedsMaxLoans() {
        // Arrange
        Fines mockFines = new Fines();
        mockFines.setCategory("Student");
        mockFines.setMax_loans(2);
        
        Transactions t1 = new Transactions(); t1.setReturnDate(LocalDate.now().plusDays(5));
        Transactions t2 = new Transactions(); t2.setReturnDate(LocalDate.now().plusDays(5));
        
        when(transactionRepo.getBorrowedData(1)).thenReturn(Arrays.asList(t1, t2));
        when(fineRepo.findByCategory("Student")).thenReturn(mockFines);

        // Act
        Boolean isEligible = transactionService.checkEligibility(testTransaction);

        // Assert: User already has 2 books (the max limit), so they should be denied
        assertFalse(isEligible);
    }

    @Test
    void testGetFines_Overdue() {
        // Arrange
        ReturnDTO returnBook = new ReturnDTO();
        returnBook.setLibraryId(1);
        returnBook.setBookId(101);
        returnBook.setCategory("Student");

        Transactions mockReturnedData = new Transactions();
        // Return date was 5 days ago (Overdue by 5 days)
        mockReturnedData.setReturnDate(LocalDate.now().minusDays(5));
        
        Fines mockFines = new Fines();
        mockFines.setCategory("Student");
        mockFines.setRate(10.0); // 10 currency units per day

        when(transactionRepo.findByIds(1, 101)).thenReturn(mockReturnedData);
        when(fineRepo.findByCategory("Student")).thenReturn(mockFines);

        // Act
        Double fine = transactionService.getFines(returnBook);

        // Assert
        assertNotNull(fine);
        assertEquals(50.0, fine); // 5 days * 10 
    }
}

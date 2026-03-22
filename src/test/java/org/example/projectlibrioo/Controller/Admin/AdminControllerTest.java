package org.example.projectlibrioo.Controller.Admin;

import org.example.projectlibrioo.Model.*;
import org.example.projectlibrioo.Service.Admin.AdminService;
import org.example.projectlibrioo.Service.Transactions.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)  // Pure Mockito, no Spring context at all
class AdminControllerTest {

    @Mock
    private AdminService adminService;

    @Mock
    private TransactionService transactionService;

    @InjectMocks
    private AdminController adminController;  // Real controller, mocked dependencies

    private Member mockMember;
    private Guest mockGuest;
    private Book mockBook;
    private Transactions mockTransaction;

    @BeforeEach
    void setUp() {
        mockMember = new Member();
        mockMember.setLibraryID(1);
        mockMember.setFullName("John Doe");
        mockMember.setEmail("john@example.com");
        mockMember.setAddress("123 Main St");
        mockMember.setPhoneNumber("0771234567");

        mockGuest = new Guest();
        mockGuest.setGuestID(1);
        mockGuest.setFullName("Jane Doe");
        mockGuest.setEmail("jane@example.com");
        mockGuest.setAddress("456 Side St");

        mockBook = new Book();
        mockBook.setBookId(1);
        mockBook.setTitle("Clean Code");
        mockBook.setAuthor("Robert Martin");

        mockTransaction = new Transactions();
        mockTransaction.setTransactionId(1);
    }

    // ─── BOOK ────────────────────────────────────────────────────────────────

    @Test
    void getAllBooks_shouldReturnBook_whenFound() {
        when(adminService.getAllBooks(1)).thenReturn(mockBook);

        ResponseEntity<Book> response = adminController.getAllBooks(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Clean Code", response.getBody().getTitle());
    }

    @Test
    void getAllBooks_shouldReturn404_whenNotFound() {
        when(adminService.getAllBooks(99)).thenReturn(null);

        ResponseEntity<Book> response = adminController.getAllBooks(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void updateBook_shouldReturnUpdatedBook() {
        when(adminService.updateBooks(any(Book.class))).thenReturn(mockBook);

        ResponseEntity<Book> response = adminController.updateBooks(mockBook);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Clean Code", response.getBody().getTitle());
    }

    @Test
    void updateBook_shouldReturn404_whenNotFound() {
        when(adminService.updateBooks(any(Book.class))).thenReturn(null);

        ResponseEntity<Book> response = adminController.updateBooks(mockBook);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void deleteBook_shouldReturnOk_whenDeleted() {
        when(adminService.deleteBooks(1)).thenReturn(true);

        ResponseEntity<String> response = adminController.deleteBooks(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Book deleted successfully", response.getBody());
    }

    @Test
    void deleteBook_shouldReturn304_whenNotFound() {
        when(adminService.deleteBooks(99)).thenReturn(false);

        ResponseEntity<String> response = adminController.deleteBooks(99);

        assertEquals(HttpStatus.NOT_MODIFIED, response.getStatusCode());
    }

    @Test
    void getAllBooksList_shouldReturnList() {
        when(adminService.getAllBooks()).thenReturn(List.of(mockBook));

        ResponseEntity<List<Book>> response = adminController.getAllBooks();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1, response.getBody().size());
    }

    // ─── MEMBER ──────────────────────────────────────────────────────────────

    @Test
    void addMember_shouldReturnOk_whenSaved() {
        when(adminService.saveMemberData(any(Member.class))).thenReturn(mockMember);

        ResponseEntity<?> response = adminController.addMember(mockMember);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void addMember_shouldReturnForbidden_whenNotSaved() {
        when(adminService.saveMemberData(any(Member.class))).thenReturn(null);

        ResponseEntity<?> response = adminController.addMember(mockMember);

        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    void getMember_shouldReturnMember_whenFound() {
        when(adminService.getAllMembers(1)).thenReturn(mockMember);

        ResponseEntity<Member> response = adminController.getAllMembers(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("John Doe", response.getBody().getFullName());
    }

    @Test
    void getMember_shouldReturn404_whenNotFound() {
        when(adminService.getAllMembers(99)).thenReturn(null);

        ResponseEntity<Member> response = adminController.getAllMembers(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void deleteMember_shouldReturnOk_whenDeleted() {
        when(adminService.deleteMember(1)).thenReturn(true);

        ResponseEntity<String> response = adminController.deleteMembers(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Member deleted successfully", response.getBody());
    }

    @Test
    void deleteMember_shouldReturn404_whenNotFound() {
        when(adminService.deleteMember(99)).thenReturn(false);

        ResponseEntity<String> response = adminController.deleteMembers(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    // ─── GUEST ───────────────────────────────────────────────────────────────

    @Test
    void addGuest_shouldReturnOk_whenSaved() {
        when(adminService.saveGuestData(any(Guest.class))).thenReturn(mockGuest);

        ResponseEntity<?> response = adminController.addGuest(mockGuest);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void addGuest_shouldReturnForbidden_whenNotSaved() {
        when(adminService.saveGuestData(any(Guest.class))).thenReturn(null);

        ResponseEntity<?> response = adminController.addGuest(mockGuest);

        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    void getGuest_shouldReturnGuest_whenFound() {
        when(adminService.getAllGuests(1)).thenReturn(mockGuest);

        ResponseEntity<Guest> response = adminController.getAllGuests(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Jane Doe", response.getBody().getFullName());
    }

    @Test
    void getGuest_shouldReturn404_whenNotFound() {
        when(adminService.getAllGuests(99)).thenReturn(null);

        ResponseEntity<Guest> response = adminController.getAllGuests(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    // ─── TRANSACTIONS ────────────────────────────────────────────────────────

    @Test
    void borrowBook_shouldReturnOk_whenEligible() {
        when(transactionService.checkEligibility(any(Transactions.class))).thenReturn(true);
        when(transactionService.saveTransaction(any(Transactions.class))).thenReturn(mockTransaction);

        ResponseEntity<Transactions> response = adminController.borrowBook(mockTransaction);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void borrowBook_shouldReturnForbidden_whenNotEligible() {
        when(transactionService.checkEligibility(any(Transactions.class))).thenReturn(false);

        ResponseEntity<Transactions> response = adminController.borrowBook(mockTransaction);

        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    void getAllTransactions_shouldReturnList() {
        when(transactionService.getAllTransactions()).thenReturn(List.of(mockTransaction));

        List<Transactions> response = adminController.getAllTransactions();

        assertEquals(1, response.size());
        assertEquals(1, response.get(0).getTransactionId());
    }
}
package org.example.projectlibrioo.Service.Admin;

import org.example.projectlibrioo.Model.Book;
import org.example.projectlibrioo.Model.Member;
import org.example.projectlibrioo.Repository.BookRepo;
import org.example.projectlibrioo.Repository.GuestRepo;
import org.example.projectlibrioo.Repository.MemberRepo;
import org.example.projectlibrioo.Repository.RobotRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AdminServiceTest {

    @Mock
    private BookRepo bookRepo;

    @Mock
    private MemberRepo memberRepo;

    @InjectMocks
    private AdminService adminService;

    private Book sampleBook;
    private Member sampleMember;

    @BeforeEach
    void setUp() {
        sampleBook = new Book();
        sampleBook.setBookId(1001);
        sampleBook.setTitle("Unit Test Book");
        sampleBook.setAvailability(true);

        sampleMember = new Member();
        sampleMember.setLibraryID(2001);
        sampleMember.setFullName("Test User");
        sampleMember.setStatus("Student");
    }

    @Test
    void testGetAllBooks_Success() {
        // Arrange
        when(bookRepo.findById(1001)).thenReturn(sampleBook);

        // Act
        Book result = adminService.getAllBooks(1001);

        // Assert
        assertNotNull(result);
        assertEquals("Unit Test Book", result.getTitle());
        verify(bookRepo, times(1)).findById(1001);
    }

    @Test
    void testGetAllBooks_NotFound() {
        // Arrange
        when(bookRepo.findById(9999)).thenReturn(null);

        // Act
        Book result = adminService.getAllBooks(9999);

        // Assert
        assertNull(result);
    }

    @Test
    void testGetAllMembers_Success() {
        // Arrange
        when(memberRepo.findUserByLibraryID(2001)).thenReturn(sampleMember);

        // Act
        Member result = adminService.getAllMembers(2001);

        // Assert
        assertNotNull(result);
        assertEquals("Test User", result.getFullName());
    }

    @Test
    void testDeleteBooks_Success() {
        when(bookRepo.findById(1001)).thenReturn(sampleBook);
        doNothing().when(bookRepo).delete(sampleBook);

        Boolean isDeleted = adminService.deleteBooks(1001);

        assertTrue(isDeleted);
        verify(bookRepo, times(1)).delete(sampleBook);
    }
}

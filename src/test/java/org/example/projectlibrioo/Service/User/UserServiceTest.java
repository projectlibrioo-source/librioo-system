package org.example.projectlibrioo.Service.User;

import org.example.projectlibrioo.Model.Book;
import org.example.projectlibrioo.Model.Guest;
import org.example.projectlibrioo.Model.Member;
import org.example.projectlibrioo.Repository.BookRepo;
import org.example.projectlibrioo.Repository.GuestRepo;
import org.example.projectlibrioo.Repository.MemberRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private BookRepo bookRepo;

    @Mock
    private MemberRepo memberRepo;

    @Mock
    private GuestRepo guestRepo;

    @InjectMocks
    private UserService userService;

    private Member mockMember;
    private Guest mockGuest;
    private Book mockBook1;
    private Book mockBook2;

    @BeforeEach
    void setUp() {
        mockMember = new Member();
        mockMember.setLibraryID(100);
        mockMember.setFullName("Alice");

        mockGuest = new Guest();
        mockGuest.setGuestID(200);
        mockGuest.setFullName("Bob");

        mockBook1 = new Book();
        mockBook1.setTitle("Sci-Fi Book 1");
        mockBook1.setCategory("Sci-Fi");

        mockBook2 = new Book();
        mockBook2.setTitle("Sci-Fi Book 2");
        mockBook2.setCategory("Sci-Fi");
    }

    // ─── checkLibraryId ──────────────────────────────────────────────────────

    @Test
    void testCheckLibraryId_Found() {
        when(memberRepo.findUserByLibraryID(100)).thenReturn(mockMember);

        Member result = userService.checkLibraryId(100);

        assertNotNull(result);
        assertEquals("Alice", result.getFullName());
        verify(memberRepo, times(1)).findUserByLibraryID(100);
    }

    @Test
    void testCheckLibraryId_NotFound() {
        when(memberRepo.findUserByLibraryID(999)).thenReturn(null);

        Member result = userService.checkLibraryId(999);

        assertNull(result);
    }

    // ─── checkGuestId ────────────────────────────────────────────────────────

    @Test
    void testCheckGuestId_Found() {
        when(guestRepo.findGuestByGuestID(200)).thenReturn(mockGuest);

        Guest result = userService.checkGuestId(200);

        assertNotNull(result);
        assertEquals("Bob", result.getFullName());
        verify(guestRepo, times(1)).findGuestByGuestID(200);
    }

    @Test
    void testCheckGuestId_NotFound() {
        when(guestRepo.findGuestByGuestID(999)).thenReturn(null);

        Guest result = userService.checkGuestId(999);

        assertNull(result);
    }

    // ─── getBookByName ───────────────────────────────────────────────────────

    @Test
    void testGetBookByName_Found() {
        when(bookRepo.findAllByTitle("Sci-Fi Book 1")).thenReturn(List.of(mockBook1));

        List<Book> results = userService.getBookByName("Sci-Fi Book 1");

        assertNotNull(results);
        assertEquals(1, results.size());
        assertEquals("Sci-Fi Book 1", results.get(0).getTitle());
    }

    @Test
    void testGetBookByName_NotFound() {
        when(bookRepo.findAllByTitle("Unknown")).thenReturn(List.of());

        List<Book> results = userService.getBookByName("Unknown");

        assertNotNull(results);
        assertTrue(results.isEmpty());
    }

    // ─── getBooksByCategory ──────────────────────────────────────────────────

    @Test
    void testGetBooksByCategory_Found() {
        when(bookRepo.findByCategoryIgnoreCase("Sci-Fi")).thenReturn(Arrays.asList(mockBook1, mockBook2));

        List<Book> results = userService.getBooksByCategory("Sci-Fi");

        assertEquals(2, results.size());
        assertEquals("Sci-Fi Book 1", results.get(0).getTitle());
        assertEquals("Sci-Fi Book 2", results.get(1).getTitle());
    }

    @Test
    void testGetBooksByCategory_Empty() {
        when(bookRepo.findByCategoryIgnoreCase("Unknown")).thenReturn(List.of());

        List<Book> results = userService.getBooksByCategory("Unknown");

        assertNotNull(results);
        assertTrue(results.isEmpty());
    }

    // ─── getCategories ───────────────────────────────────────────────────────

    @Test
    void testGetCategories_ReturnsList() {
        when(bookRepo.findDistinctCategories()).thenReturn(List.of("Sci-Fi", "History", "Technology"));

        List<String> categories = userService.getCategories();

        assertNotNull(categories);
        assertEquals(3, categories.size());
        assertTrue(categories.contains("Sci-Fi"));
    }

    // ─── searchByCategory ────────────────────────────────────────────────────

    @Test
    void testSearchByCategory_ReturnsShelves() {
        when(bookRepo.findShelfNumberByCategory("Sci-Fi")).thenReturn(List.of(3, 7, 12));

        List<Integer> shelves = userService.searchByCategory("Sci-Fi");

        assertNotNull(shelves);
        assertEquals(3, shelves.size());
        assertEquals(3, shelves.get(0));
    }
}
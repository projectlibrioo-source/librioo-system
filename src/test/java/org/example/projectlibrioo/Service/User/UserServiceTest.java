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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

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

    @Test
    void testCheckLibraryId() {
        Member mockMember = new Member();
        mockMember.setLibraryID(100);
        mockMember.setFullName("Alice");

        when(memberRepo.findUserByLibraryID(100)).thenReturn(mockMember);

        Member result = userService.checkLibraryId(100);

        assertNotNull(result);
        assertEquals("Alice", result.getFullName());
    }

    @Test
    void testCheckGuestId() {
        Guest mockGuest = new Guest();
        mockGuest.setGuestID(200);
        mockGuest.setFullName("Bob");

        when(guestRepo.findGuestByGuestID(200)).thenReturn(mockGuest);

        Guest result = userService.checkGuestId(200);

        assertNotNull(result);
        assertEquals("Bob", result.getFullName());
    }

    @Test
    void testGetBooksByCategory() {
        Book b1 = new Book(); b1.setTitle("Sci-Fi Book 1");
        Book b2 = new Book(); b2.setTitle("Sci-Fi Book 2");

        when(bookRepo.findByCategoryIgnoreCase("Sci-Fi")).thenReturn(Arrays.asList(b1, b2));

        List<Book> results = userService.getBooksByCategory("Sci-Fi");

        assertEquals(2, results.size());
        assertEquals("Sci-Fi Book 1", results.get(0).getTitle());
    }

    @Test
    void testGetCategories() {
        when(bookRepo.findDistinctCategories()).thenReturn(Arrays.asList("Fiction", "Non-Fiction"));

        List<String> categories = userService.getCategories();

        assertEquals(2, categories.size());
        assertEquals("Non-Fiction", categories.get(1));
    }
}

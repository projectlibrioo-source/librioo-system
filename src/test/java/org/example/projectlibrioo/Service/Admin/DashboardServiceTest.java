package org.example.projectlibrioo.Service.Admin;

import org.example.projectlibrioo.Model.DashboardDTO;
import org.example.projectlibrioo.Repository.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class DashboardServiceTest {

    @Mock
    private BookRepo bookRepository;

    @Mock
    private MemberRepo memberRepository;

    @Mock
    private GuestRepo guestRepository;

    @Mock
    private RobotRepo robotRepository;

    @Mock
    private TransactionRepo transactionsRepository;

    @InjectMocks
    private DashboardService dashboardService;

    @Test
    void testGetDashboardData() {
        // Arrange
        when(bookRepository.count()).thenReturn(150L);
        when(memberRepository.count()).thenReturn(50L);
        when(guestRepository.count()).thenReturn(20L);
        when(memberRepository.countByStatus("ACTIVE")).thenReturn(40L);
        when(transactionsRepository.countByStatus("BORROWED")).thenReturn(30L);
        when(transactionsRepository.countByReturnDateBeforeAndStatus(LocalDate.now(), "BORROWED")).thenReturn(5L);
        when(robotRepository.countByStatus("ACTIVE")).thenReturn(3L);

        // Act
        DashboardDTO result = dashboardService.getDashboardData();

        // Assert
        assertEquals(150L, result.getTotalBooks());
        assertEquals(70L, result.getTotalUsers()); // 50 members + 20 guests
        assertEquals(40L, result.getActiveUsers());
        assertEquals(30L, result.getBooksBorrowed());
        assertEquals(5L, result.getOverdueBooks());
        assertEquals(3L, result.getActiveRobots());
    }

    // Code Snippet: DashboardServiceTest.java
    @Test
    void testGetDashboardData_ZeroState() {
        when(bookRepository.count()).thenReturn(0L);
        when(memberRepository.count()).thenReturn(0L);
        when(guestRepository.count()).thenReturn(0L);
        when(memberRepository.countByStatus("ACTIVE")).thenReturn(0L);
        when(transactionsRepository.countByStatus("BORROWED")).thenReturn(0L);
        when(transactionsRepository.countByReturnDateBeforeAndStatus(LocalDate.now(), "BORROWED")).thenReturn(0L);
        when(robotRepository.countByStatus("ACTIVE")).thenReturn(0L);
        DashboardDTO result = dashboardService.getDashboardData();
        assertEquals(0L, result.getTotalBooks());
        assertEquals(0L, result.getTotalUsers());
    }
}

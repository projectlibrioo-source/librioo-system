package org.example.projectlibrioo.Service.Admin;

import org.example.projectlibrioo.DTO.DashboardStatsDTO;
import org.example.projectlibrioo.DTO.LibraryReportResponseDTO;
import org.example.projectlibrioo.DTO.ReportRequestDTO;
import org.example.projectlibrioo.DTO.SystemReportResponseDTO;
import org.example.projectlibrioo.Repository.BookRepo;
import org.example.projectlibrioo.Repository.TransactionRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ReportsServiceTest {

    @Mock
    private TransactionRepo transactionRepo;

    @Mock
    private BookRepo bookRepo;

    @InjectMocks
    private ReportsService reportsService;

    @Test
    void testGetDashboardStats() {
        when(transactionRepo.count()).thenReturn(1024L);

        DashboardStatsDTO stats = reportsService.getDashboardStats();

        assertNotNull(stats);
        assertEquals(1024L, stats.getTotalLoans());
        assertEquals(99.9, stats.getSystemUptime());
        assertEquals(2500.0, stats.getRevenue());
    }

    @Test
    void testGenerateLibraryReport() {
        ReportRequestDTO req = new ReportRequestDTO();
        req.setFromDate(LocalDate.now().minusDays(2));
        req.setToDate(LocalDate.now());

        LibraryReportResponseDTO res = reportsService.generateLibraryReport(req);

        assertNotNull(res);
        assertNotNull(res.getPopularItems());
        assertEquals(2, res.getPopularItems().size());
        assertEquals("The Great Gatsby", res.getPopularItems().get(0).getTitle());
        
        // 3 days inclusive
        assertEquals(3, res.getRows().size());
    }

    @Test
    void testGenerateSystemReport() {
        ReportRequestDTO req = new ReportRequestDTO();
        req.setFromDate(LocalDate.now().minusDays(1));
        req.setToDate(LocalDate.now());

        SystemReportResponseDTO res = reportsService.generateSystemReport(req);

        assertNotNull(res);
        assertEquals(2, res.getRows().size()); // 2 days inclusive
        assertNotNull(res.getRows().get(0).getRobotId());
    }
}

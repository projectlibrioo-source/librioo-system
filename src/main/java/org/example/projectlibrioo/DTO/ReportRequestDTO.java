package org.example.projectlibrioo.DTO;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ReportRequestDTO {
    private String reportType;      // "LIBRARY" or "SYSTEM"
    private LocalDate fromDate;
    private LocalDate toDate;
    private String category;        // for library reports
    private String robotUnit;       // for system reports
    private String metricType;      // for system reports
}
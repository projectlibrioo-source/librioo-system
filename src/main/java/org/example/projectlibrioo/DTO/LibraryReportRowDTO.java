package org.example.projectlibrioo.DTO;

import lombok.Data;
import java.time.LocalDate;

@Data
public class LibraryReportRowDTO {
    private LocalDate date;
    private int patrons;      // unique patrons on that day
    private int loans;         // number of checkouts
    private int overdues;      // overdue returns
}
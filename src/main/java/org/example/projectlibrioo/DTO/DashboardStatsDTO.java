package org.example.projectlibrioo.DTO;

import lombok.Data;

@Data
public class DashboardStatsDTO {
    private long totalLoans;
    private double systemUptime;   // percentage
    private double revenue;         // LKR
}
package org.example.projectlibrioo.Controller.Admin;

import org.example.projectlibrioo.Service.Admin.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.example.projectlibrioo.DTO.DashboardStatsDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/admin/reports")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReportsController {

    @Autowired
    private ReportsService reportsService;

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardStatsDTO> getDashboardStats() {
        DashboardStatsDTO stats = reportsService.getDashboardStats();
        return new ResponseEntity<>(stats, HttpStatus.OK);
    }
}
package org.example.projectlibrioo.Controller.Admin;

import org.example.projectlibrioo.Service.Admin.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/reports")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReportsController {

    @Autowired
    private ReportsService reportsService;
}
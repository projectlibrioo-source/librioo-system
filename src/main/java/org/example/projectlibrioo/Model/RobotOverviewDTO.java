package org.example.projectlibrioo.Model;
//package org.example.projectlibrioo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor


public class RobotOverviewDTO {

    private int robotID;
    private String robotName;
    private String status;
    private String partReplaced;
    private LocalDate nextServiceDate;
    private String serviceAlert;



}

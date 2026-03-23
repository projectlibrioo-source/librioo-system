package org.example.projectlibrioo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
<<<<<<< HEAD
import jakarta.persistence.Id;

import lombok.Data;
import java.time.LocalDate;
=======
import jakarta.persistence.Id;import java.time.LocalDate;

>>>>>>> origin/backend-sandun

@Entity
public class Robot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int robotID;
    private String robotName;
    private String model;
    private LocalDate startDate;
    private String status; // ACTIVE, MAINTENANCE, RETIRED
<<<<<<< HEAD
    private LocalDate serviceDate;
=======

    public int getRobotID() {
        return robotID;
    }

    public void setRobotID(int robotID) {
        this.robotID = robotID;
    }

    public String getRobotName() {
        return robotName;
    }

    public void setRobotName(String robotName) {
        this.robotName = robotName;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
>>>>>>> origin/backend-sandun
}


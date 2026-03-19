package org.example.projectlibrioo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;import java.time.LocalDate;


@Entity
public class Robot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int robotID;
    private String robotName;
    private String model;
    private String status; // ACTIVE, MAINTENANCE, RETIRED

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

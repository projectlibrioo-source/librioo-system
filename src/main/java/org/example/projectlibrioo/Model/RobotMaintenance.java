package org.example.projectlibrioo.Model;

<<<<<<< HEAD
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "robot_maintenance")
public class RobotMaintenance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "robot_id", nullable = false)
    private Robot robot;

    private LocalDate lastServiceDate;
    private LocalDate nextServiceDate;
    private String partReplaced;

    @Column(length = 1000)
    private String technicianNotes;

    private LocalDate loggedAt;

    @PrePersist
    public void prePersist() {
        this.loggedAt = LocalDate.now();
=======
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class RobotMaintenance {
    @Id
    private int maintainId;
    private LocalDate startDate;
    private LocalDate lastServiceDate;
    private LocalDate nextServiceDate;
    private String partReplaced;
    private String technicianNotes;

    public int getMaintainId() {
        return maintainId;
    }

    public void setMaintainId(int maintainId) {
        this.maintainId = maintainId;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getLastServiceDate() {
        return lastServiceDate;
    }

    public void setLastServiceDate(LocalDate lastServiceDate) {
        this.lastServiceDate = lastServiceDate;
    }

    public LocalDate getNextServiceDate() {
        return nextServiceDate;
    }

    public void setNextServiceDate(LocalDate nextServiceDate) {
        this.nextServiceDate = nextServiceDate;
    }

    public String getPartReplaced() {
        return partReplaced;
    }

    public void setPartReplaced(String partReplaced) {
        this.partReplaced = partReplaced;
    }

    public String getTechnicianNotes() {
        return technicianNotes;
    }

    public void setTechnicianNotes(String technicianNotes) {
        this.technicianNotes = technicianNotes;
>>>>>>> origin/backend-sandun
    }
}

package org.example.projectlibrioo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Member {
    @Id
    private int libraryID;
    private String fullName;
    private String address;
    private String occupation;
    private String workOrSchoolAddress;
    private String email;
    private String phoneNumber;
    private int age;
    private String NICNumber;
    private String status;

    public int getLibraryID() {
        return libraryID;
    }

    public void setLibraryID(int libraryID) {
        this.libraryID = libraryID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getWorkOrSchoolAddress() {
        return workOrSchoolAddress;
    }

    public void setWorkOrSchoolAddress(String workOrSchoolAddress) {
        this.workOrSchoolAddress = workOrSchoolAddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getNICNumber() {
        return NICNumber;
    }

    public void setNICNumber(String NICNumber) {
        this.NICNumber = NICNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

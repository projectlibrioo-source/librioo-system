package org.example.projectlibrioo.Model;


public class DashboardDTO {

    private long totalBooks;
    private long totalUsers;
    private long activeUsers;
    private long booksBorrowed;
    private long overdueBooks;
    private long activeRobots;

    public DashboardDTO(long totalBooks, long totalUsers, long activeUsers, long booksBorrowed, long overdueBooks, long activeRobots) {
        this.totalBooks = totalBooks;
        this.totalUsers = totalUsers;
        this.activeUsers = activeUsers;
        this.booksBorrowed = booksBorrowed;
        this.overdueBooks = overdueBooks;
        this.activeRobots = activeRobots;
    }

    public long getTotalBooks() {
        return totalBooks;
    }

    public void setTotalBooks(long totalBooks) {
        this.totalBooks = totalBooks;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getActiveUsers() {
        return activeUsers;
    }

    public void setActiveUsers(long activeUsers) {
        this.activeUsers = activeUsers;
    }

    public long getBooksBorrowed() {
        return booksBorrowed;
    }

    public void setBooksBorrowed(long booksBorrowed) {
        this.booksBorrowed = booksBorrowed;
    }

    public long getOverdueBooks() {
        return overdueBooks;
    }

    public void setOverdueBooks(long overdueBooks) {
        this.overdueBooks = overdueBooks;
    }

    public long getActiveRobots() {
        return activeRobots;
    }

    public void setActiveRobots(long activeRobots) {
        this.activeRobots = activeRobots;
    }
}

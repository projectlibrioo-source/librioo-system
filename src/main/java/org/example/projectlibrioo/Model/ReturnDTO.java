package org.example.projectlibrioo.Model;


public class ReturnDTO {
    private int libraryId;
    private int bookId;

    public int getLibraryId() {
        return libraryId;
    }

    public void setLibraryId(int libraryId) {
        this.libraryId = libraryId;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }
    private String category;
}

package org.example.projectlibrioo.Service.Transactions;

import org.example.projectlibrioo.Model.Transactions;
import org.example.projectlibrioo.Repository.TransactionRepo;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepo transactionRepo;

    public Boolean checkEligibility(Transactions transactionBook){
        int libraryId = transactionBook.getLibraryId();
        List<Transactions> bookDetails = transactionRepo.getBorrowedData(libraryId);
        int bookCount = bookDetails.toArray().length;

        if(bookCount >= 5){
            return false;
        }

        else {
            for (Transactions transactions: bookDetails){
                if(transactions.getReturnDate().isBefore(LocalDate.now())){
                    return false;
                }
            }

            return true;
        }
    }

    public Transactions saveTransaction(Transactions transactionBook) {
        return transactionRepo.save(transactionBook);

    }

    }

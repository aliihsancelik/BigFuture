package com.libraryCT.step_definitions;

import com.libraryCT.pages.BorrowingBooksPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.DBUtils;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class borrowingBooksStudentStepDefs {

    @Then("verify the borrowing books if they exist in database or not")
    public void verify_the_borrowing_books_if_they_exist_in_database_or_not() {

        BrowserUtils.waitFor(2);

        BorrowingBooksPage borrowingBooksPage = new BorrowingBooksPage();

        //ui

        List<String> bookNames = BrowserUtils.getElementsText(borrowingBooksPage.bookNames);

        //database

        List<Map<String, Object>> nameOfBooksDB = DBUtils.getQueryResultMap("select name \n" +
                "from book_borrow bb join books b\n" +
                "on bb.id = b.id");

        List<String> namesString = new ArrayList<>();


        for (int i = 0; i < nameOfBooksDB.size() ; i++) {

            namesString.add((String) nameOfBooksDB.get(i).get("name"));

        }

        System.out.println("from Database = " + namesString);
        System.out.println("from UI = " + bookNames);

        //assertion

        Assert.assertTrue(namesString.containsAll(bookNames));



    }



}

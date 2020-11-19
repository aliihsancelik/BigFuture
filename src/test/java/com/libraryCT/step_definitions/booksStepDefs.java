package com.libraryCT.step_definitions;

import com.libraryCT.pages.BooksPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.awt.print.Book;
import java.util.List;

public class booksStepDefs {

    @Then("the user should select {string} and add a book")
    public void the_user_should_select_and_add_a_book(String category) {

            BrowserUtils.waitFor(1);

            BooksPage booksPage = new BooksPage();

            booksPage.selectCategory(category);

            booksPage.addBook.click();
            BrowserUtils.waitFor(1);
            booksPage.bookNameInput.sendKeys("IT");
            booksPage.ISBNInput.sendKeys("1");
            booksPage.yearInput.sendKeys("2020");
            booksPage.authorInput.sendKeys("Cybertek");
            booksPage.description.sendKeys("awesome");
            booksPage.saveBookButton.click();
            //BrowserUtils.waitFor(1);

            BrowserUtils.waitForVisibility(Driver.get().findElement(By.xpath("//div[contains(text(),'The book has been created')]")),2);
            Assert.assertTrue(Driver.get().findElement(By.xpath("//div[contains(text(),'The book has been created')]")).isDisplayed());

    }




//            for (WebElement editButton : editButtons) {
//
//                JavascriptExecutor js = (JavascriptExecutor) Driver.get();
//                js.executeScript("window.scrollBy(0,250)");
//
//                BrowserUtils.waitFor(2);
//                editButton.click();
//                BrowserUtils.waitFor(2);
//                BrowserUtils.waitForVisibility(booksPage.cancelButton,3);
//                BrowserUtils.waitForClickablility(booksPage.cancelButton,3);
//                booksPage.cancelButton.click();
//                BrowserUtils.waitFor(2);
//            }




}

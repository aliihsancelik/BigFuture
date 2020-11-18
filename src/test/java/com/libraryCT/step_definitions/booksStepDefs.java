package com.libraryCT.step_definitions;

import com.libraryCT.pages.BooksPage;
import com.libraryCT.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.awt.print.Book;
import java.util.List;

public class booksStepDefs {


    @Then("the user add a book successfully and able to edit-close in each category")
    public void the_user_add_a_book_successfully_and_able_to_edit_close_in_each_category() {

        List<WebElement> categories = new Select(new BooksPage().categoriesDropdown).getOptions();
        BooksPage booksPage = new BooksPage();
        List<WebElement> editButtons = new BooksPage().editButtons;

        for (WebElement category : categories) {
            BrowserUtils.waitFor(2);
            category.click();
            BrowserUtils.waitFor(2);
            booksPage.addBook.click();
            BrowserUtils.waitFor(2);
            booksPage.bookNameInput.sendKeys("IT");
            booksPage.ISBNInput.sendKeys("1");
            booksPage.yearInput.sendKeys("2020");
            booksPage.authorInput.sendKeys("Cybertek");
            booksPage.description.sendKeys("awesome");
            booksPage.saveBookButton.click();
            BrowserUtils.waitFor(2);

            for (WebElement editButton : editButtons) {

                editButton.click();
                BrowserUtils.waitFor(2);
                new BooksPage().cancelButton.click();
                BrowserUtils.waitFor(2);
            }

        }
    }
}

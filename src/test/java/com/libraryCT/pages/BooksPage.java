package com.libraryCT.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class BooksPage extends BasePage{

    @FindBy(css = ".btn.btn-lg.btn-outline.btn-primary.btn-sm.add_book_btn")
    public WebElement addBook;

    @FindBy(xpath = "//input[@placeholder='Book Name']")
    public WebElement bookNameInput;

    @FindBy(xpath = "//input[@placeholder='ISBN']")
    public WebElement ISBNInput;

    @FindBy(xpath = "//input[@placeholder='Year']")
    public WebElement yearInput;

    @FindBy(xpath = "//input[@placeholder='Author']")
    public WebElement authorInput;

    @FindBy(css = "#description")
    public WebElement description;

    @FindBy(xpath = "//button[contains(text(),'Save changes')]")
    public WebElement saveBookButton;

    @FindBy(xpath = "//tbody//tr//td[1]")
    public List<WebElement> editButtons;

    @FindBy(xpath = "//button[contains(text(),'Close')]")
    public WebElement cancelButton;






}

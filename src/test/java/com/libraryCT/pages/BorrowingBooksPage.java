package com.libraryCT.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class BorrowingBooksPage extends BasePage{

    @FindBy(xpath = "(//table[@id='borrowed_list'])//tbody/tr/td[2]")
    public List<WebElement> bookNames;


}

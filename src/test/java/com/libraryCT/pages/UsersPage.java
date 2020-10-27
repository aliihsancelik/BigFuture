package com.libraryCT.pages;

import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class UsersPage extends BasePage{

    @FindBy(css = ".btn.btn-lg.btn-outline.btn-primary.btn-sm")
    public WebElement addUser;

    @FindBy(css = "[name='full_name']")
    public WebElement fullName;

    @FindBy(css = "[name='password']")
    public WebElement password;

    @FindBy(css = "[name='email']")
    public WebElement email;

    @FindBy(css = "#address")
    public WebElement address;

    @FindBy(css = "#user_group_id")
    public WebElement userGroup;

    @FindBy(xpath = "(//select[@name='status'])[1]")
    public WebElement status;

    @FindBy(css = "[name='start_date']")
    public WebElement startDate;

    @FindBy(css = "[name='end_date']")
    public WebElement endDate;

    @FindBy(xpath = "//button[contains(text(),'Save changes')]")
    public WebElement saveChanges;

    @FindBy(xpath = "//button[contains(text(),'Close')]")
    public WebElement close;

    @FindBy(xpath = "//tbody//a[@role='button']")
    public List<WebElement> edits;

    public void addUserWithValidInfo (String name , String passw, String mail, String adres){

        addUser.click();
        BrowserUtils.waitFor(1);
        fullName.sendKeys(name);
        password.sendKeys(passw);
        email.sendKeys(mail);
        new Select(userGroup).selectByVisibleText("Librarian");
        new Select(status).selectByVisibleText("ACTIVE");
        address.sendKeys(adres);
        saveChanges.click();
        BrowserUtils.waitFor(1);
        Assert.assertEquals(mail, Driver.get().findElement(By.xpath("//td[contains(text(),'"+mail+"')]")).getText());

    }

    public void editAndClose(){
        for (WebElement edit : edits) {
            BrowserUtils.waitFor(2);
            edit.click();
            BrowserUtils.waitFor(1);
            close.click();
            BrowserUtils.waitFor(1);
        }
    }




}

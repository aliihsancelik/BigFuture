package com.libraryCT.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

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

    public void sendUserInfo (String name , String passw, String mail, String adres){

        fullName.sendKeys(name);
        password.sendKeys(passw);
        email.sendKeys(mail);
        address.sendKeys(adres);

    }




}

package com.libraryCT.pages;


import com.libraryCT.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {


    @FindBy(css = "#inputEmail")
    public WebElement username;

    @FindBy(css = "#inputPassword")
    public WebElement password;

    @FindBy(xpath = "//button[contains(text(),'Sign in')]")
    public WebElement submit;


    public void login(String usernameSTR,String passwordSTR){

        username.sendKeys(usernameSTR);
        password.sendKeys(passwordSTR);
        submit.click();


    }


}

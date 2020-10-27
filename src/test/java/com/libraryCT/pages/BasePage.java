package com.libraryCT.pages;

import com.libraryCT.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import java.util.List;

public abstract class BasePage {

   public BasePage(){
       PageFactory.initElements(Driver.get(),this);
   }

   @FindBy(css = "[id='navbarDropdown']")
   public WebElement profileName;

   @FindBy(xpath = "//ul[@class='navbar-nav mr-auto']//li")
   public List<WebElement> modules;

   @FindBy(xpath = "//span[contains(text(),'Dashboard')]")
   public WebElement dashboardModule;

   @FindBy(xpath = "//span[contains(text(),'Users')]")
   public WebElement usersModule;

   @FindBy(xpath = "//span[contains(text(),'Books')]")
   public WebElement booksModule;

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















   public void logOut(){
       Driver.get().findElement(By.cssSelector("[id='navbarDropdown']")).click();
       Driver.get().findElement(By.xpath("//a[contains(text(),'Log Out')]")).click();
   }

}

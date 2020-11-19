package com.libraryCT.pages;

import com.libraryCT.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import java.util.List;

public abstract class BasePage {

   public BasePage(){

      PageFactory.initElements(Driver.get(),this);//this connects our driver with the elements in this class!
   }
   @FindBy(css = "#book_categories")
   public WebElement categoriesDropdown;

   @FindBy(xpath = "//*[@type='search']")
   public WebElement searchButton;

   @FindBy(xpath = "//thead//tr//th")
   public List<WebElement> tableColumns;

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


   public void logOut(){
       Driver.get().findElement(By.cssSelector("[id='navbarDropdown']")).click();
       Driver.get().findElement(By.xpath("//a[contains(text(),'Log Out')]")).click();
   }

}

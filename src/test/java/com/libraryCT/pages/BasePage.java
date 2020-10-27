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
   public static WebElement profileName;

   @FindBy(xpath = "//ul[@class='navbar-nav mr-auto']//li")
   public static List<WebElement> modules;

   public static void logOut(){
       Driver.get().findElement(By.cssSelector("[id='navbarDropdown']")).click();
       Driver.get().findElement(By.xpath("//a[contains(text(),'Log Out')]")).click();
   }

}

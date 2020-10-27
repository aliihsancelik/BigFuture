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


   public void logOut(){
       Driver.get().findElement(By.cssSelector("[id='navbarDropdown']")).click();
       Driver.get().findElement(By.xpath("//a[contains(text(),'Log Out')]")).click();
   }

}

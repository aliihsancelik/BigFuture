package com.libraryCT.step_definitions;

import com.libraryCT.pages.BasePage;
import com.libraryCT.pages.BorrowingBooks;
import com.libraryCT.pages.LoginPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.ConfigurationReader;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class modulesStepDefs {

    @When("the user login as a {string}")
    public void the_user_login_as_a(String user) {
        if(user.equals("student")){
            new LoginPage().login(ConfigurationReader.get("studentUsername"),ConfigurationReader.get("studentPassword"));
        }else if (user.equals("librarian")){
            new LoginPage().login(ConfigurationReader.get("librarianUsername"),ConfigurationReader.get("librarianPassword"));
        }
    }

    @Then("the user should see modules")
    public void the_user_should_see_modules() {
        BrowserUtils.waitFor(2);

        int num =0;
        for (WebElement module : new BorrowingBooks().modules) {
            num++;
            System.out.println(module.getText());
            Assert.assertTrue(module.isDisplayed());
        }
        System.out.println("Total= "+num+" modules");

    }
}

package com.libraryCT.step_definitions;

import com.libraryCT.pages.BorrowingBooksPage;
import com.libraryCT.pages.LoginPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

public class modulesStepDefs {

    @When("the user login as a {string}")
    public void the_user_login_as_a(String user) {
        if(user.equals("student")){
            new LoginPage().login(ConfigurationReader.get("studentUsername"),ConfigurationReader.get("studentPassword"));
        }else if (user.equals("librarian")){
            new LoginPage().login(ConfigurationReader.get("librarianUsername"),ConfigurationReader.get("librarianPassword"));
        }

        BrowserUtils.waitFor(2);
    }


    @Then("the user should see {int} modules")
    public void the_user_should_see_modules(int expectedNumOfModules) {
        BrowserUtils.waitFor(2);

        int actualNumOfModules =0;

        for (WebElement module : new BorrowingBooksPage().modules) {

            actualNumOfModules++;

            System.out.println(module.getText());
            Assert.assertTrue(module.isDisplayed());
        }

        System.out.println("Total= "+actualNumOfModules+" modules");

        Assert.assertEquals(expectedNumOfModules,actualNumOfModules);
    }


}

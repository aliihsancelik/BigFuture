package com.libraryCT.step_definitions;

import com.libraryCT.pages.LoginPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.ConfigurationReader;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class loginStepDefs {

    @When("the user login as a {string} {string}")
    public void the_user_login_as_a(String username, String password) {
        new LoginPage().login(username , password);
    }

    @Then("the user on  {string}")
    public void the_user_on(String title) {
        BrowserUtils.waitFor(2);
        Assert.assertEquals(title , Driver.get().getTitle());
    }

    @Then("the user should logout")
    public void the_user_should_logout() {

    }

}

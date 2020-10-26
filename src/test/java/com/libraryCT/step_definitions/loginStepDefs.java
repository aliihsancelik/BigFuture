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

    @Given("the student is on the login page")
    public void the_student_is_on_the_login_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the student login")
    public void the_student_login() {
       new LoginPage().login(ConfigurationReader.get("username"),ConfigurationReader.get("password"));
    }

    @Then("the student should see Library page")
    public void the_student_should_see_Library_page() {
        BrowserUtils.waitFor(2);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Library", actualTitle);
    }
}

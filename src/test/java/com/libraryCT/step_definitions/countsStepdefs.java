package com.libraryCT.step_definitions;

import com.libraryCT.pages.UsersPage;
import com.libraryCT.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class countsStepdefs {

    @Then("the user should see {string} as default record")
    public void the_user_should_see_as_default_record(String defaultRecordNum) {

        BrowserUtils.waitFor(2);
        Assert.assertEquals(defaultRecordNum , new Select(new UsersPage().recordDropdown).getFirstSelectedOption().getText());
    }

    @Then("the user should see the following options")
    public void the_user_should_see_the_following_options(List<String> expectedOptions) {

        List<WebElement> allOptions = new Select(new UsersPage().recordDropdown).getOptions();
        List<String> actualOptions = BrowserUtils.getElementsText(allOptions);
        Assert.assertEquals(expectedOptions,actualOptions);

    }



}

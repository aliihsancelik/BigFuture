package com.libraryCT.step_definitions;

import com.libraryCT.pages.UsersPage;
import com.libraryCT.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;

import java.util.List;

public class categoriesStepDefs {

    @Then("the user should see all options,choose any options and search a book")
    public void the_user_should_see_all_options_choose_any_options_and_search_a_book() {

        List<WebElement> categories = new Select(new UsersPage().categoriesDropdown).getOptions();

        for (WebElement category : categories) {
            category.click();
            BrowserUtils.waitFor(1);
            new UsersPage().searchButton.sendKeys("sadas");
            BrowserUtils.waitFor(1);
        }


    }
}

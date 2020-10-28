package com.libraryCT.step_definitions;

import com.libraryCT.pages.UsersPage;
import com.libraryCT.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class tableColumnsStepDefs {


    @Then("the user should see the following columns")
    public void the_user_should_see_the_following_columns(List<String> expectedTableColumns) {

        BrowserUtils.waitFor(2);
        List<String> actualTableColumns = BrowserUtils.getElementsText(new UsersPage().tableColumns);
        Assert.assertEquals(expectedTableColumns,actualTableColumns);
    }
}

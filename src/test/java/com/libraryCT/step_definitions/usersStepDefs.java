package com.libraryCT.step_definitions;

import com.libraryCT.pages.UsersPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;

public class usersStepDefs {

    @When("the user navigates {string}")
    public void the_user_navigates(String moduleName) {
        if(moduleName.equals("Users")){
            new UsersPage().usersModule.click();
        }

    }

    @Then("the user should add a new user successfully")
    public void the_user_should_add_a_new_user_successfully() {

        BrowserUtils.waitFor(2);
        new UsersPage().addUserWithValidInfo("ali","yb","ereseqwqw@gmail.com","virginia");
                                                              //mail must change every time

        BrowserUtils.waitFor(1);

    }



    @Then("the user should be able to edit and close")
    public void the_user_should_be_able_to_edit_and_close() {

        new UsersPage().editAndClose();

    }
}

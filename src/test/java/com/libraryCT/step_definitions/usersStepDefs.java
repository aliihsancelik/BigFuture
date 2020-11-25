package com.libraryCT.step_definitions;

import com.libraryCT.pages.BooksPage;
import com.libraryCT.pages.UsersPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.DBUtils;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.Map;

public class usersStepDefs {

    @When("the user navigates {string}")
    public void the_user_navigates(String moduleName) {
        if(moduleName.equals("Users")){
            new UsersPage().usersModule.click();
        }else if(moduleName.equals("Books")){
            new BooksPage().booksModule.click();
        }else if(moduleName.equals("Borrowing Books")) {
            new BooksPage().borrowingBooksModule.click();
        }

    }

    @Then("the user should add a new user successfully")
    public void the_user_should_add_a_new_user_successfully() {

        BrowserUtils.waitFor(2);
        new UsersPage().addUserWithValidInfoAndVerifyUIandDATABASE("ali","yb","rteresdsrqa@gmail.com","virginia");
                                                              //mail must change every time

    }



    @Then("the user should be able to edit and close")
    public void the_user_should_be_able_to_edit_and_close() {

        new UsersPage().editAndClose();

    }


    @Then("the user with this email {string} existed in ui and database or not")
    public void the_user_with_this_email_existed_in_ui_and_database_or_not(String email) {

        //ui
        String emailUI = Driver.get().findElement(By.xpath("//td[contains(text(),'"+email+"')]")).getText();

        //database
        Map<String, Object> rowMap = DBUtils.getRowMap("select email from users\n" +
                "where email = '"+email+"'");

        System.out.println("emailFromUI = " + emailUI);
        System.out.println("emailFromDATABASE = " + (String)rowMap.get("email"));

        //assertion
        Assert.assertEquals((String)rowMap.get("email") , emailUI);


    }
}

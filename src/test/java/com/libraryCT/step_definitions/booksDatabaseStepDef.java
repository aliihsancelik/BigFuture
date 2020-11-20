package com.libraryCT.step_definitions;

import com.libraryCT.pages.BooksPage;
import com.libraryCT.utilities.BrowserUtils;
import com.libraryCT.utilities.DBUtils;
import com.libraryCT.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class booksDatabaseStepDef {



    @Then("in first category the info of {string} book should be in database")
    public void in_first_category_the_info_of_book_should_be_in_database(String bookName) {

        //from ui(as an actual)
        new Select(new BooksPage().categoriesDropdown).selectByVisibleText("Action and Adventure");
        BrowserUtils.waitFor(1);

        List<WebElement> firstRowValues = Driver.get().findElements(By.xpath("//tr//td[text()='"+bookName+"']"));
        List<String> firstRowValuesString = new ArrayList<>();

        for (int i = 1; i < firstRowValues.size()-3; i++) {
            firstRowValuesString.add(firstRowValues.get(i).getText());
        }
        System.out.println(firstRowValuesString);


        //from database(as an expected)
        Map<String,Object> getRow =  DBUtils.getRowMap("select isbn,name,author from books\n" +
                "where name = '"+bookName+"' and isbn = 'a';");


        //verification
        Assert.assertEquals(getRow.get("isbn") , firstRowValuesString.get(0));
        Assert.assertEquals(getRow.get("name") , firstRowValuesString.get(1));
        Assert.assertEquals(getRow.get("author") , firstRowValuesString.get(2));
    }
}

package com.libraryCT.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

     plugin = {"html:target/failed-html-report"},//simple cucumber report to see which is failed,it works with regular run and maven-verify as well.
     features = "@target/rerun.txt",
     glue = "com/libraryCT/step_definitions"
        //There are plugins in pom that provides to get failed ones and run again but be careful about the runner file names,
        //-because the plugin in pom is in Alphabetical order for the runners, check your pom and see!!

        // To rerun failed tests only, we created FailedTestRunner under runner package.
        // Then we use 'maven verify' phase to execute both CukesRunner and FailedTestRunner


)

public class FailedTestRunner {

}

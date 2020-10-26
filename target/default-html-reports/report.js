$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "login as a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the student is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_student_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student login",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_student_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student should see Library page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_student_should_see_Library_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
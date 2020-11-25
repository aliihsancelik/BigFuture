$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/borrowingBooksStudent.feature");
formatter.feature({
  "name": "Borrowing Books for Student",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify borrowing books from database for student user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@database"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user login as a \"student\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Borrowing Books\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_navigates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the borrowing books if they exist in database or not",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.borrowingBooksStudentStepDefs.verify_the_borrowing_books_if_they_exist_in_database_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
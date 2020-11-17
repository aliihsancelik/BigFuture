$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/users.feature");
formatter.feature({
  "name": "Add User",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Librarian should add, edit users and close",
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
  "name": "the user login as a \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Users\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_navigates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should add a new user successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_should_add_a_new_user_successfully()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.libraryCT.utilities.DBUtils.executeQuery(DBUtils.java:168)\n\tat com.libraryCT.utilities.DBUtils.getQueryResultMap(DBUtils.java:127)\n\tat com.libraryCT.utilities.DBUtils.getRowMap(DBUtils.java:71)\n\tat com.libraryCT.pages.UsersPage.addUserWithValidInfo(UsersPage.java:72)\n\tat com.libraryCT.step_definitions.usersStepDefs.the_user_should_add_a_new_user_successfully(usersStepDefs.java:27)\n\tat ✽.the user should add a new user successfully(file:///Users/aliihsancelik/IdeaProjects/BigFuture/src/test/resources/features/users.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be able to edit and close",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_should_be_able_to_edit_and_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});
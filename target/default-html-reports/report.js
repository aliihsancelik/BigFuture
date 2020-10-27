$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/users.feature");
formatter.feature({
  "name": "Add User",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add, edit users and close",
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
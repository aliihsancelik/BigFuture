$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/booksDatabase.feature");
formatter.feature({
  "name": "books database testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the first book existed in database or not",
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
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user login as a \"librarian\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigates \"Books\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_navigates(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "in first category the info of \"a\" book should be in database",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});
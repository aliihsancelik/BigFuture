$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Modules.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Students should have access to 2 modules",
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
  "name": "the user login as a \"student\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see modules",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_should_see_modules()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.libraryCT.pages.BasePage.moduleS(BasePage.java:25)\n\tat com.libraryCT.step_definitions.modulesStepDefs.the_user_should_see_modules(modulesStepDefs.java:30)\n\tat ✽.the user should see modules(file:///Users/aliihsancelik/IdeaProjects/BigFuture/src/test/resources/features/Modules.feature:6)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Librarian should have access to 3 modules",
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
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see modules",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_should_see_modules()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.libraryCT.pages.BasePage.moduleS(BasePage.java:25)\n\tat com.libraryCT.step_definitions.modulesStepDefs.the_user_should_see_modules(modulesStepDefs.java:30)\n\tat ✽.the user should see modules(file:///Users/aliihsancelik/IdeaProjects/BigFuture/src/test/resources/features/Modules.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});
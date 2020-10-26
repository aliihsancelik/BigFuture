$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user login as a \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user on  \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user should logout",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title"
      ]
    },
    {
      "cells": [
        "student11@library",
        "tScBPCUr",
        "Library"
      ]
    },
    {
      "cells": [
        "librarian13@library",
        "9rf6axdD",
        "Library"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "the user login as a \"student11@library\" \"tScBPCUr\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_user_login_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user on  \"Library\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_user_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_user_should_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "the user login as a \"librarian13@library\" \"9rf6axdD\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_user_login_as_a(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user on  \"Library\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_user_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.loginStepDefs.the_user_should_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
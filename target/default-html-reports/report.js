$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify both Students and librarians login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user login as a \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user on  \"\u003ctitle\u003e\"",
  "keyword": "Then "
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
        "student11",
        "tScBPCUr",
        "Library"
      ]
    },
    {
      "cells": [
        "librarian13",
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
  "status": "skipped"
});
formatter.step({
  "name": "the user login as a \"student11\" \"tScBPCUr\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user on  \"Library\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user login as a \"librarian13\" \"9rf6axdD\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user on  \"Library\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});
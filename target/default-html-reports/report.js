$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Modules.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "\"\u003cuser\u003e\" should have accesses the \"\u003cn\u003e\" modules",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user login as a \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see \u003cn\u003e modules",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "n"
      ]
    },
    {
      "cells": [
        "student",
        "2"
      ]
    },
    {
      "cells": [
        "librarian",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "\"student\" should have accesses the \"2\" modules",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});

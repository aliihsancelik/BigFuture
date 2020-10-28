$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/tableColumns.feature");
formatter.feature({
  "name": "table columns",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify table columns",
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
  "keyword": "Given "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the following columns",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.tableColumnsStepDefs.the_user_should_see_the_following_columns(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c[Actions, ISBN, Name, Author, Category, Year]\u003e but was:\u003c[Actions, ISBN, Name, Author, Category, Year, Borrowed By]\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:120)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.libraryCT.step_definitions.tableColumnsStepDefs.the_user_should_see_the_following_columns(tableColumnsStepDefs.java:18)\n\tat ✽.the user should see the following columns(file:///Users/aliihsancelik/IdeaProjects/BigFuture/src/test/resources/features/tableColumns.feature:6)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});
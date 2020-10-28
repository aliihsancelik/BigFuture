$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/categories.feature");
formatter.feature({
  "name": "categories and search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "students should choose any categories and search a book",
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
  "name": "the user should see all options,choose any options and search a book",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.categoriesStepDefs.the_user_should_see_all_options_choose_any_options_and_search_a_book()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
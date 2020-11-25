
  Feature: books database testing

    @database
    Scenario: the first book existed in database or not
      When the user login as a "librarian"
      And the user navigates "Books"
      Then in first category the info of "a" book should be in database
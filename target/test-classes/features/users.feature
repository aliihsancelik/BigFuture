Feature: Add User

@wip
  Scenario: Librarian should add, edit users and close
    Given the user login as a "librarian"
    When the user navigates "Users"
    Then the user should add a new user successfully
    And the user should be able to edit and close

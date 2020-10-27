Feature: Add User

  @wip
  Scenario: Add, edit users and close
    When the user navigates "Users"
    Then the user should add a new user successfully
    And the user should be able to edit and close
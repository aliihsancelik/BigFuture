Feature: User verification

  Background:
    Given the user login as a "librarian"
    When the user navigates "Users"

@database
  Scenario: Librarian should add, edit users and close
    Then the user should add a new user successfully
    And the user should be able to edit and close

@wip @database
 Scenario: verify if the given user exists in ui and database
   Then the user with this email "dorene.kuphal@abernathyinc.name" existed in ui and database or not


Feature: count records


  Scenario: default record should be 10
    Given the user login as a "librarian"
    And the user navigates "Users"
    Then the user should see "10" as default record
    And the user should see the following options
      | 5   |
      | 10  |
      | 15  |
      | 50  |
      | 100 |
      | 200 |
      | 500 |


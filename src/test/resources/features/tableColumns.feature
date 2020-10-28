Feature: table columns

  @wip
  Scenario: verify table columns
    Given the user login as a "student"
    Then the user should see the following columns
      | Actions  |
      | ISBN     |
      | Name     |
      | Author   |
      | Category |
      | Year     |


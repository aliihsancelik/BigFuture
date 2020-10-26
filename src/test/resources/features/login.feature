
Feature:login functionality

  @wip
  Scenario Outline: verify both Students and librarians login

    When the user login as a "<username>" "<password>"
    Then the user on  "<title>"
    Examples:
      | username    | password | title   |
      | student11   | tScBPCUr | Library |
      | librarian13 | 9rf6axdD | Library |


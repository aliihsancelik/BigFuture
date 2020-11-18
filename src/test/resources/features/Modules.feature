Feature:

@wip
  Scenario Outline: user should have accesses the "<n>" modules
    When the user login as a "<user>"
    Then the user should see <n> modules
    Examples:
      | user      | n |
      | librarian | 2 |
      | student   | 3 |



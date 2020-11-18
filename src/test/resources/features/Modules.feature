Feature:

  @wip
  Scenario Outline: "<user>" should have accesses the "<n>" modules
    When the user login as a "<user>"
    Then the user should see <n> modules
    Examples:
      | user      | n |
      | student   | 2 |
      | librarian | 3 |



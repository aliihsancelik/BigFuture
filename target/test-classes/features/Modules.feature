Feature:

#  Scenario: Students should have access to 2 modules
#    When the user login as a "student"
#    Then the user should see modules
#
#
#  Scenario: Librarian should have access to 3 modules
#    When the user login as a "librarian"
#    Then the user should see modules

@wip
  Scenario Outline: user should have accesses the "<n>" modules
    When the user login as a "<user>"
    Then the user should see "<n>" modules
    Examples:
      | user      | n |
      | librarian | 2 |
      | student   | 3 |



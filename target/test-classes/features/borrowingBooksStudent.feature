
  Feature: Borrowing Books for Student

    @database
    Scenario: Verify borrowing book names from database for student user
      Given the user login as a "student"
      And the user navigates "Borrowing Books"
      Then verify the borrowing books if they exist in database or not

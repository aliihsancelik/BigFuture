
  Feature: adding a book and editing-closing books

    @wip
    Scenario: librarian should add a book for each category and should be able to edit and close the books
      When the user login as a "librarian"
      And the user navigates "Books"
      Then the user add a book successfully and able to edit-close in each category
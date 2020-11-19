Feature: adding a book for each category

  @wip
  Scenario Outline: librarian should add a book for "<categories>" category
    When the user login as a "librarian"
    And the user navigates "Books"
    Then the user should select "<categories>" and add a book
    Examples:
      | categories              |
      | Action and Adventure    |
      | Anthology               |
      | Classic                 |
      | Comic and Graphic Novel |
      | Crime and Detective     |
      | Drama                   |
      | Fable                   |
      | Fairy Tale              |
      | Fan-Fiction             |
      | Fantasy                 |
      | Historical Fiction      |
      | Horror                  |
      | Biography/Autobiography |
      | Humor                   |
      | Romance                 |
      | Short Story             |
      | Essay                   |
      | Memoir                  |
      | Poetry                  |


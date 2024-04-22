Feature: Amazon Web Automation

  Scenario: Navigate to JETech product and verify "About this item" section
    Given I open the Amazon website
    When I click on the hamburger menu
    And I click on "Computers"
    And I click on "Table Accessories"
    And I filter the results by Brand "JETech"
    And I sort the JETech results by "Newest Arrivals"
    And I click on the lowest priced item
    And I switch the window
    Then I assert that the "About this item" section is present
    And I log the text of the "About this item" section to the console

Feature: End to end Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add products to cart
    And Validate the total prices
    Then I select the country, submit and verify Thank you message


    Scenario: Filling the form to shop

    Given I open Ecommerce page
    When I fill the form details
    And Validate the forms behavior
    Then Select the Shop page

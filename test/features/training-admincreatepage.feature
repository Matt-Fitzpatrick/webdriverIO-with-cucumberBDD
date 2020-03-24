Feature: Admin product create page

    As an administrator on the Auticon Training product creation page
    I want to create a new product on the site
    Because I want visitors to find, read about, and buy the new product

    Scenario: Access for administrators
        Given I am logged in as an administrator
        When I go to the Auticon Training product creation page
        Then I should see the product creation form

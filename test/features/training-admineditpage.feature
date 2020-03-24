Feature: Admin product edit page

    As an administrator on the Auticon Training product creation page
    I want to edit a product on the site
    Because I want visitors to view images and current information about the product

    Scenario: Access for administrators
        Given I am logged in as an administrator
        When I go to the Auticon Training product editing page
        Then I should see the product editing form

    Scenario: Upload image for newly created product
        Given I have deleted the previous test product
        And I have created a new test product
        And I have uploaded a picture
        When I look at the new test product's page
        Then I should not see the No Image placeholder
        And I should see the picture I uploaded

    # Scenario: Last name validation
    #     Given I am on the Auticon Training registration page
    #     And the Last Name input contains "test"
    #     When I clear the Last Name input
    #     Then I should see the validation error message "Last name is required."

    # Scenario: Try to register without required inputs
    #     Given I am on the Auticon Training registration page
    #     When I register with first name "", last name "", email "", and password ""
    #     Then I should be on the Auticon Training registration page
    #     And I should see the validation error message "First name is required."
    #     And I should see the validation error message "Last name is required."
    #     And I should see the validation error message "Email is required."
    #     And I should see the validation error message "Password is required."
    
    # Scenario: Try to register with an email that already has an account
    #     Given I am on the Auticon Training registration page
    #     When I register with first name "Curried", last name "Banana", email "curriedbanana1234@gmail.com", and password "Testasdqwe1234!"
    #     Then I should be on the Auticon Training registration page
    #     And I should see the error message "The specified email already exists"
Feature: Performing a login

    As a user on the login page
    I want to login
    Because I want to access my account

    Background:
        Given I am on the login page

    Scenario Outline: Performning login operation with passing test data as data table
        When I login with email and password <email> <password> into the text box
        Then I should see the logout link

    Examples:
    |email| |password|
    |"curriedbanana1234@gmail.com"| |"Testasdqwe1234!"|
    |"michael.cappe@auticon.us"| |"password123"|
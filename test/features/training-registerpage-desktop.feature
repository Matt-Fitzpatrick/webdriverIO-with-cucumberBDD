Feature: Registration page in desktop layout

    As a desktop visitor to the Auticon Training registration page
    I want to register a new account
    Because I want to place orders faster and more easily

    Background:
        Given I am using a desktop browser window size

    Scenario: Page metadata display
        When I go to the Auticon Training registration page
        Then I should see the site icon is the small nopCommerce logo
        And I should see the page title is "Your store. Register"

    Scenario: Logged-out users get register and log in links
        Given I am logged out
        When I go to the Auticon Training registration page
        Then I should see a "Register" link in the header
        And I should see a "Log in" link in the header 
        But I should not see a "My account" link in the header
        And I should not see a "Log out" link in the header        

    Scenario: Logged-in users get my account and log out links
        Given I am logged in
        When I go to the Auticon Training registration page
        Then I should see a "My account" link in the header
        And I should see a "Log out" link in the header        
        But I should not see a "Register" link in the header
        And I should not see a "Log in" link in the header

    Scenario: Wishlist link displays count
        Given my wishlist has 1 item
        But my shopping cart is empty
        When I go to the Auticon Training registration page
        Then I should see a "Wishlist" link with a "(1)"
        And I should see a "Shopping cart" link with a "(0)"

    Scenario: Shopping cart link displays count
        Given my shopping cart has 2 items
        But my wishlist is empty
        When I go to the Auticon Training registration page
        Then I should see a "Shopping cart" link with a "(2)"
        And I should see a "Wishlist" link with a "(0)"

    Scenario: Banner link appears and has alternative text
        When I go to the Auticon Training registration page
        Then I should see the banner is the large nopCommerce logo
        And I should hear the banner has the alternative text "Your store name"

    Scenario: Main heading appears
        When I go to the Auticon Training registration page
        Then I should see exactly 1 main heading
        And I should see the main heading is "Register"

    Scenario: Banner link goes to home page
        Given I am on the Auticon Training registration page
        When I click the banner
        Then I should be on the Auticon Training home page

    Scenario: Form labels appear
        When I go to the Auticon Training registration page
        Then I should see the Male button has the label "Male"
        And I should see the Female button has the label "Female"
        And I should see the First Name input has the label "First name:"
        And I should see the Last Name input has the label "Last name:"
        And I should see the Email input has the label "Email:"
        And I should see the Company Name input has the label "Company name:"
        And I should see the Newsletter checkbox has the label "Newsletter:"
        And I should see the Password input has the label "Password:"
        And I should see the Confirm Password input has the label "Confirm password:"

    Scenario: Inputs are marked as required or not required
        When I go to the Auticon Training registration page
        Then I should see the First Name input is required
        And I should see the Last Name input is required
        And I should see the Email input is required
        And I should see the Password input is required
        And I should see the Confirm Password input is required
        But I should not see the Male button is required
        And I should not see the Female button is required
        And I should not see the Day of Birth input is required
        And I should not see the Month of Birth input is required
        And I should not see the Year of Birth input is required
        And I should not see the Company Name input is required
        And I should not see the Newsletter input is required

    Scenario: Try to register without required inputs
        Given I am on the Auticon Training registration page
        When I register with first name "", last name "", email "", and password ""
        Then I should be on the Auticon Training registration page
        And I should see the validation error message "First name is required."
        And I should see the validation error message "Last name is required."
        And I should see the validation error message "Email is required."
        And I should see the validation error message "Password is required."
    
    Scenario: Try to register with an email that already has an account
        Given I am on the Auticon Training registration page
        When I register with first name "Curried", last name "Banana", email "curriedbanana1234@gmail.com", and password "Testasdqwe1234!"
        Then I should be on the Auticon Training registration page
        And I should see the error message "The specified email already exists"
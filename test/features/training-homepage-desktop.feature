Feature: Home page in desktop layout

    As a desktop visitor to the Auticon Training home page
    I want the home page components to display correctly
    Because I want to understand and interact with the site

    Background:
        Given I am using a desktop browser window size

    Scenario: Page metadata display
        When I go to the Auticon Training home page
        Then I should see the site icon is the small nopCommerce logo
        And I should see the page title is "Your store"

    Scenario: Logged-out users get register and log in links
        Given I am logged out
        When I go to the Auticon Training home page
        Then I should see a "Register" link in the header
        And I should see a "Log in" link in the header 
        But I should not see a "My account" link in the header
        And I should not see a "Log out" link in the header        

    Scenario: Logged-in users get my account and log out links
        Given I am logged in
        When I go to the Auticon Training home page
        Then I should see a "My account" link in the header
        And I should see a "Log out" link in the header        
        But I should not see a "Register" link in the header
        And I should not see a "Log in" link in the header

    Scenario: Wishlist link displays count
        Given my wishlist has 1 item
        But my shopping cart is empty
        When I go to the Auticon Training home page
        Then I should see a "Wishlist" link with a "(1)"
        And I should see a "Shopping cart" link with a "(0)"

    Scenario: Shopping cart link displays count
        Given my shopping cart has 2 items
        But my wishlist is empty
        When I go to the Auticon Training home page
        Then I should see a "Shopping cart" link with a "(2)"
        And I should see a "Wishlist" link with a "(0)"

    Scenario: Banner link appears and has alternative text
        When I go to the Auticon Training home page
        Then I should see the banner is the large nopCommerce logo
        And I should hear the banner has the alternative text "Your store name"

    Scenario: Banner link goes to home page
        Given I am on the Auticon Training home page
        When I click the banner
        Then I should be on the Auticon Training home page

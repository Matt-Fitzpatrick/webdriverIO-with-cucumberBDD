import { When } from 'cucumber';
import HomePage from '../pageobjects/training-homepage.page';
import RegisterPage from '../pageobjects/training-registerpage.page';

import mLoginPage from '../pageobjects/login.page';
When(/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, (email, password) => {
  mLoginPage.login(email, password);
});

When('I go to the Auticon Training home page', () => {
  HomePage.open();
});

When('I go to the Auticon Training registration page', () => {
  RegisterPage.open();
});

When('I reload the page', () => {
  HomePage.refresh();
});

When('I click the banner', () => {
  HomePage.clickBanner();
});

When(/^I register with first name "([^"]*)", last name "([^"]*)", email "([^"]*)", and password "([^"]*)"$/, (firstName, lastName, email, password) => {
  RegisterPage.register(firstName, lastName, email, password);
});
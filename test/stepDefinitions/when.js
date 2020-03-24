import { When } from 'cucumber';
import AdminCreatePage from '../pageobjects/training-admincreatepage.page';
import AdminEditPage from '../pageobjects/training-admineditpage.page';
import HomePage from '../pageobjects/training-homepage.page';
import ItemPage from '../pageobjects/training-itempage.page';
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

When('I go to the Auticon Training product creation page', () => {
  AdminCreatePage.open();
});

When('I go to the Auticon Training product editing page', () => {
  AdminEditPage.open();
});

When('I reload the page', () => {
  HomePage.refresh();
});

When('I click the banner', () => {
  HomePage.clickBanner();
});

When(/^I set the (.*) (?:button|checkbox|input) to "([^"]*)"$/, (input, text) => {
  RegisterPage.inputNamed(input).setValue(text); browser.pause(3000);
});

When(/^I clear the (.*) (?:button|checkbox|input)$/, (input) => {
  RegisterPage.inputNamed(input).clearValue(); browser.pause(3000);
});

When(/^I register with first name "([^"]*)", last name "([^"]*)", email "([^"]*)", and password "([^"]*)"$/, (firstName, lastName, email, password) => {
  RegisterPage.register(firstName, lastName, email, password);
});

When('I look at the new test product\'s page', () => {
  ItemPage.open('Don\'t Drop the Controller');
});
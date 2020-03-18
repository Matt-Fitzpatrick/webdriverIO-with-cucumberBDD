import { Then } from 'cucumber';
import HomePage from '../pageobjects/training-homepage.page';
import RegisterPage from '../pageobjects/training-registerpage.page';

import mLoginPage from '../pageobjects/login.page';
Then('I should see the logout link', () => {
  mLoginPage.isLogoutShowing().should.be.true;
});

Then('I should be on the Auticon Training home page', () => {
  HomePage.url.should.equal('https://auticontraining.azurewebsites.net/');
});

Then('I should be on the Auticon Training registration page', () => {
  HomePage.url.should.match(/^https:\/\/auticontraining.azurewebsites.net\/register(\?|$)/);
});

Then('I should see the site icon is the small nopCommerce logo', () => {
  expect(HomePage.favIconUrl).to.equal('https://auticontraining.azurewebsites.net/icons/icons_0/favicon.ico');
});

Then(/^I should see the page title is "([^"]*)"$/, (text) => {
  HomePage.title.should.equal(text);
});

Then(/^I should see an? "([^"]*)" link in the header$/, (text) => {
  HomePage.headerLinks.should.contain(text);
});

Then(/^I should not see an? "([^"]*)" link in the header$/, (text) => {
  HomePage.headerLinks.should.not.contain(text);
});

Then(/^I should see an? "([^"]*)" link with an? "([^"]*)"$/, (partialText, searchText) => {
  expect(HomePage.linkContaining(partialText)).to.exist.and.contain(searchText);
});

Then('I should see the banner is the large nopCommerce logo', () => {
  expect(HomePage.bannerUrl).to.equal('https://auticontraining.azurewebsites.net/Themes/DefaultClean/Content/images/logo.png');
});

Then(/^I should see exactly (\d+) main headings?$/, (number) => {
  RegisterPage.mainHeadingCount.should.equal(number);
});

Then(/^I should see the main heading is "([^"]*)"$/, (text) => {
  expect(RegisterPage.mainHeadingText).to.equal(text);
});

Then(/^I should hear the banner has the alternative text "([^"]*)"$/, (text) => {
  expect(HomePage.bannerAltText).to.equal(text);
});

Then(/^I should see the error message "([^"]*)"$/, (text) => {
  RegisterPage.errorMessages.should.contain(text);
});

Then(/^I should see the validation error message "([^"]*)"$/, (text) => {
  RegisterPage.validationErrorMessages.should.contain(text);
});

Then(/^I should see the (.*) (?:button|checkbox|input) has the label "([^"]*)"$/, (input, text) => {
  expect(RegisterPage.inputNamed(input).labelText).to.equal(text);
});

Then(/^I should see the (.*) (?:button|checkbox|input) is required$/, (input) => {
  expect(RegisterPage.inputNamed(input).isRequired).to.be.true;
});

Then(/^I should not see the (.*) (?:button|checkbox|input) is required$/, (input) => {
  expect(RegisterPage.inputNamed(input).isRequired).to.be.false;
});

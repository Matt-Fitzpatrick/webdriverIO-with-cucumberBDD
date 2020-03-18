import { Given } from 'cucumber';
import HomePage from '../pageobjects/training-homepage.page';
import LoginPage from '../pageobjects/training-loginpage.page';
import LogoutPage from '../pageobjects/training-logoutpage.page';
import RegisterPage from '../pageobjects/training-registerpage.page';
import WishlistPage from '../pageobjects/training-wishlistpage.page';
import CartPage from '../pageobjects/training-cartpage.page';
import ItemPage from '../pageobjects/training-itempage.page';

import mLoginPage from '../pageobjects/login.page';
Given('I am on the login page', () => {
  mLoginPage.open();
  browser.getTitle().should.equal('Your store. Login');
});

Given('I am using a desktop browser window size', () => {
  browser.setWindowSize(1440, 810);
});

Given('I am on the Auticon Training home page', () => {
  HomePage.open();
});

Given('I am on the Auticon Training registration page', () => {
  RegisterPage.open();
});

Given('I am logged out', () => {
  LogoutPage.logout();
});

Given('I am logged in', () => {
  LoginPage.open().login();
});

Given('my wishlist is empty', () => {
  WishlistPage.open().empty();
});

Given(/^my wishlist has (\d+) items?$/, (itemNumber) => {
  WishlistPage.open().empty();
  ItemPage.open().addToWishlist(itemNumber);
});

Given('my shopping cart is empty', () => {
  CartPage.open().empty();
});

Given(/^my shopping cart has (\d+) items?$/, (itemNumber) => {
  CartPage.open().empty();
  ItemPage.open().addToCart(itemNumber);
});

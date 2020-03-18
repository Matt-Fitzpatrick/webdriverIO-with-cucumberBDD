import Page from './page';
import utl from '../../utilities/common-utilities';

class LoginPage extends Page {
  open () {
    super.open('/login');
  }
  login (username, password) {
    this.emailInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }

  get emailInput() { return $('//input[@id="Email"]'); }
  get passwordInput() { return $('//input[@id="Password"]'); }
  get loginButton() { return $('//input[@type="submit" and @value="Log in"]'); }
  get logoutLink() { return $('//a[@class="ico-logout"]'); }

  isLogoutShowing() {
    this.logoutLink.waitForDisplayed(3000);
    return this.logoutLink.isDisplayed();
  }
}

export default new LoginPage()

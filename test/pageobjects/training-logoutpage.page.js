import Page from './page'

class LogoutPage extends Page {
  logout () {
    return super.open('/logout');
  }
}

export default new LogoutPage()

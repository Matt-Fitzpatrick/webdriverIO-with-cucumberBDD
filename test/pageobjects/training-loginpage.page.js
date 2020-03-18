import Page from './page';
import utl from '../../utilities/common-utilities';

class LoginPage extends Page {
  open () {
    return super.open('/login');
  }
  login (username = 'curriedbanana1234@gmail.com', password = 'Testasdqwe1234!') {
    $('#Email').setValue(username);
    $('#Password').setValue(password);
    $('[value="Log in"]').click();
    return this;
  }
}

export default new LoginPage()

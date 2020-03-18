import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {
  get validationErrorMessages () { return $$('.field-validation-error').map(el => el.getText()); }
  get errorMessages () { return $$('.validation-summary-errors li').map(el => el.getText()); }

  open () {
    return super.open('/register');
  }
  register (firstName = 'Curried', lastName = 'Banana', email = 'curriedbanana1234@gmail.com', password = 'Testasdqwe1234!', gender = null, day = null, month = null, year = null, options = []) {
    $('#FirstName').setValue(firstName);
    $('#LastName').setValue(lastName);
    $('#Email').setValue(email);
    $('#Password').setValue(password);
    $('#ConfirmPassword').setValue(password);
    $('#register-button').click();
    return this;
  }
  inputNamed (text) {
    var id;

    switch(text) {
      case 'Male': id = 'gender-male'; break;
      case 'Female': id = 'gender-female'; break;
      case 'First Name': id = 'FirstName'; break;
      case 'Last Name': id = 'LastName'; break;
      case 'Day of Birth': id = 'DateOfBirthDay'; break;
      case 'Month of Birth': id = 'DateOfBirthMonth'; break;
      case 'Year of Birth': id = 'DateOfBirthYear'; break;
      case 'Email': id = 'Email'; break;
      case 'Company Name': id = 'Company'; break;
      case 'Newsletter': id = 'Newsletter'; break;
      case 'Password': id = 'Password'; break;
      case 'Confirm Password': id = 'ConfirmPassword'; break;
    }

    var label = $(`//label[@for="${id}"]`);

    return {
      'id': id,
      'labelText': label.isExisting() ? label.getText() : null,
      'isRequired': $(`#${id} + .required`).isExisting(),
    }
  }
}

export default new RegisterPage()

import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {
  get validationErrorMessages () { return $$('.field-validation-error').map(el => el.getText()); }
  get errorMessages () { return $$('.validation-summary-errors li').map(el => el.getText()); }
  get registerButton () { return $('#register-button'); }

  open () {
    return super.open('/register');
  }
  register (firstName = 'Curried', lastName = 'Banana', email = 'curriedbanana1234@gmail.com', password = 'Testasdqwe1234!', gender = null, day = null, month = null, year = null, options = []) {
    this.inputNamed('First Name').setValue(firstName);
    this.inputNamed('Last Name').setValue(lastName);
    $('#Email').setValue(email);
    $('#Password').setValue(password);
    $('#ConfirmPassword').setValue(password);
    this.registerButton.click();
    return this;
  }
  inputNamed (text) {
    var id, name, el;

    switch(text) {
      case 'Gender': name = 'gender'; break;
      case 'Male': id = 'gender-male'; break;
      case 'Female': id = 'gender-female'; break;
      case 'First Name': name = 'FirstName'; break;
      case 'Last Name': name = 'LastName'; break;
      case 'Day of Birth': name = 'DateOfBirthDay'; break;
      case 'Month of Birth': name = 'DateOfBirthMonth'; break;
      case 'Year of Birth': name = 'DateOfBirthYear'; break;
      case 'Email': name = 'Email'; break;
      case 'Company Name': name = 'Company'; break;
      case 'Newsletter': name = 'Newsletter'; break;
      case 'Password': name = 'Password'; break;
      case 'Confirm Password': name = 'ConfirmPassword'; break;
      default: name = text; break;
    }

    if(id) {
      el = $(`//*[@id="${id}"]`);
      if(el.isExisting()) return el;
    }

    if(name) {
      el = $(`//*[@name="${name}"]`);
      if(el.isExisting()) return el;
    }

    return null;
  }
  labelFor (input) {
    var id = this.inputNamed(input).getAttribute('id');
    if(!id) return null;
    var label = $(`//label[@for="${id}"]`);
    return label.isExisting() ? label.getText() : null;
  }
  requiring (input) {
    var nextSibling;

    var id = this.inputNamed(input).getAttribute('id');
    var name = this.inputNamed(input).getAttribute('name');
    if(id) {
      nextSibling = this.inputNamed(input).$(`//*[@id="${id}"]/following-sibling::*`);
    }
    else if(name) {
      nextSibling = this.inputNamed(input).$(`//*[@name="${name}"]/following-sibling::*`);
    }

    return nextSibling.isExisting() && nextSibling.getAttribute('class').includes('required');
  }
}

export default new RegisterPage()

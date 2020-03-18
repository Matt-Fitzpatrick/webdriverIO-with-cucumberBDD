import Page from './page'

class CartPage extends Page {
  open () {
    return super.open('/cart');
  }
  empty () {
    const checkboxes = $$('[name="removefromcart"]');
    if(checkboxes.length > 0) {
      checkboxes.forEach(checkbox => checkbox.click());
      $('[value="Update shopping cart"]').click();
    }
    return this;
  }
}

export default new CartPage()

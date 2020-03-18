import Page from './page'

class WishlistPage extends Page {
  open () {
    return super.open('/wishlist');
  }
  empty () {
    const checkboxes = $$('[name="removefromcart"]');
    if(checkboxes.length > 0) {
      checkboxes.forEach(checkbox => checkbox.click());
      $('[value="Update wishlist"]').click();
    }
    return this;
  }
}

export default new WishlistPage()

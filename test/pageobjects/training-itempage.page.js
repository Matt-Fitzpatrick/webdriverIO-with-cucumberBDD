import Page from './page'

class ItemPage extends Page {
  open (path = 'microsoft-xbox-one-s-1tb-all-digital-edition-console-disc-free-gaming-white') {
    return super.open(path);
  }
  addToCart (itemNumber = 1) {
    $('.qty-input').setValue(itemNumber);
    $('[value="Add to cart"]').click();
    return this;
  }
  addToWishlist (itemNumber = 1) {
    $('.qty-input').setValue(itemNumber);
    $('[value="Add to wishlist"]').click();
    return this;
  }
}

export default new ItemPage()

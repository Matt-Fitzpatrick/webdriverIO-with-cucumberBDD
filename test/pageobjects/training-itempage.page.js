import Page from './page'

class ItemPage extends Page {
  get pictureUrl () { return $('//*[contains(@class, "picture")]/img').isExisting() ? $('//*[contains(@class, "picture")]/img').getAttribute('src') : null; }

  open (title = 'Microsoft - Xbox One S 1TB All-Digital Edition Console (Disc-free Gaming) - White') {
    const path = title.replace(/'/g, '').replace(/\W+/g, '-').toLowerCase();
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

import Page from './page'

class HubPage extends Page {
  open (path = 'video-games') {
    return super.open(path);
  }
  addToCart () {
    $('[value="Add to cart"]').click();
    return this;
  }
  addToWishlist () {
    $('[value="Add to wishlist"]').click();
    return this;
  }
}

export default new HubPage()

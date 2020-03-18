
export default class Page {
  get url () { return browser.getUrl(); }
  get favIconUrl () { return $('[rel="shortcut icon"]').isExisting() ? $('[rel="shortcut icon"]').getAttribute('href') : null; }
  get title () { return browser.getTitle(); }
  get headerLinks () { return $$('.header-links a').map(el => el.getText()); }
  get bannerUrl () { return $('.header-logo img').isExisting() ? $('.header-logo img').getAttribute('src') : null; }
  get bannerAltText () { return $('.header-logo img').isExisting() ? $('.header-logo img').getAttribute('alt') : null; }
  get mainHeadingCount () { return $$('h1').length; }
  get mainHeadingText () { return $('h1').isExisting() ? $('h1').getText() : null; }

  open (path) {
    browser.url(path);
    return this;
  }
  refresh () {
    browser.refresh();
    return this;
  }
  clickBanner () {
    $('.header-logo').click();
    return this;
  }
  linkContaining (searchText) {
    const foundElement = $(`*=${searchText}`);
    return foundElement.isExisting() ? foundElement.getText() : null;
  }
  readCookies () {
    this.cookies = browser.getCookies();
  }
  writeCookies () {
    browser.setCookies(this.cookies);
  }
}

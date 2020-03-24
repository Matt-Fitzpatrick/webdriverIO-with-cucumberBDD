import Page from './page'

class AdminEditPage extends Page {
  get formHeadingText () { return $('.content-header h1').isExisting() ? $('.content-header h1').getText() : null; }
  get categoryWidget () { return $('//*[contains(@class, "k-widget") and *[@name="SelectedCategoryIds"]]'); }
  get categoryListbox () { return $('//*[@id="SelectedCategoryIds_listbox"]'); }

  open (title = "Animal Crossing: New Horizons - Nintendo Switch") {
    super.open('/Admin/Product/List');
    browser.waitUntil(() => $('//*[@id="products-grid_info"]').getText());

    const el = $(`//tr[*[text()="${title}"]]//a`);

    if(el.isExisting()) {
      const serial = $(`//tr[*[text()="${title}"]]//a`).getAttribute('href').match(/\d+$/)[0];

      return super.open(`/Admin/Product/Edit/${serial}`);
    }

    return null;
  }
  inputNamed (text) {
    var id, name, el;

    switch(text) {
      case 'Save and Continue Edit': name = 'save-continue'; break;
      case 'Save': name = 'save'; break;
      case 'Delete': id = 'product-delete'; break;
      case 'Product name': name = 'Name'; break;
      case 'Short description': name = 'ShortDescription'; break;
      case 'SKU': name = 'Sku'; break;
      case 'Categories': name = 'SelectedCategoryIds'; break;
      case 'Price': name = 'Price'; break;
      case 'Tax category': name = 'TaxCategoryId'; break;
      case 'Inventory method': name = 'ManageInventoryMethodId'; break;
      case 'Stock quantity': name = 'StockQuantity'; break;
      case 'Upload a file': name = 'qqfile'; break;
      case 'Add product picture': id = 'addProductPicture'; break;
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
  categorySelect (category) {
    this.categoryWidget.click;
    this.categoryListbox.$(`//*[text()="${category}"]`).click;
    return this;
  }
  fillForm (productName = 'Don\'t Drop the Controller', shortDescription = 'Test short description. Don\'t drop the controller.', sku = '4316810', categories = [ 'Video Games' ], price = '1.23', taxCategory = 'Electronics & Software', inventoryMethod = 'Track inventory', stockQuantity = '10000') {
    this.inputNamed('Product name').setValue(productName);
    this.inputNamed('Short description').setValue(shortDescription);
    this.inputNamed('SKU').setValue(sku);
    categories.forEach(category => this.categorySelect(category));
    this.inputNamed('Price').setValue(price);
    this.inputNamed('Tax category').selectByVisibleText(taxCategory);
    this.inputNamed('Inventory method').selectByVisibleText(inventoryMethod);
    this.inputNamed('Stock quantity').setValue(stockQuantity);
    return this;
  }
  addPicture (localPath = 'test/assets/test-picture.jfif') {
    const remotePath = browser.uploadFile(localPath);
    this.inputNamed('Upload a file').setValue(remotePath);
    browser.waitUntil(() => $('//*[@qq-file-id="0"]').getAttribute('class').includes('qq-upload-success'));
    this.inputNamed('Add product picture').click();
    return this;
  }
  saveAndContinueEdit () {
    this.inputNamed('Save and Continue Edit').waitForClickable();
    this.inputNamed('Save and Continue Edit').click();
    return this;
  }
  save () {
    this.inputNamed('Save').waitForClickable();
    this.inputNamed('Save').click();
    return this;
  }
  delete () {
    this.inputNamed('Delete').click();
    const confirmButton = $('//form[contains(@action, "/Admin/Product/Delete/")]//button[contains(text(), "Delete")]');
    confirmButton.waitForClickable();
    confirmButton.click();
    return this;
  }
}

export default new AdminEditPage()

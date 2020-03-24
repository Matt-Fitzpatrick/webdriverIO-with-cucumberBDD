import Page from './page'

class AdminCreatePage extends Page {
  get formHeadingText () { return $('.content-header h1').isExisting() ? $('.content-header h1').getText() : null; }
  get categoryWidget () { return $('//*[contains(@class, "k-widget") and *[@name="SelectedCategoryIds"]]'); }

  open () {
    return super.open('/Admin/Product/Create');
  }
  inputNamed (text) {
    var id, name, el;

    switch(text) {
      case 'Save and Continue Edit': name = 'save-continue'; break;
      case 'Save': name = 'save'; break;
      case 'Product name': name = 'Name'; break;
      case 'Short description': name = 'ShortDescription'; break;
      case 'SKU': name = 'Sku'; break;
      case 'Categories': name = 'SelectedCategoryIds'; break;
      case 'Price': name = 'Price'; break;
      case 'Tax category': name = 'TaxCategoryId'; break;
      case 'Inventory method': name = 'ManageInventoryMethodId'; break;
      case 'Stock quantity': name = 'StockQuantity'; break;
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
  categoryListItem (category) {
    return $(`//*[@id="SelectedCategoryIds_listbox"]/*[text() = "${category}"]`);
  }
  categorySelect (category) {
    this.categoryWidget.click();
    this.categoryListItem(category).click();
    return this;
  }
  fillForm (productName = 'Don\'t Drop the Controller', shortDescription = 'Test short description. Don\'t drop the controller.', sku = '4444444', categories = [ 'Video Games' ], price = '1.23', taxCategory = 'Electronics & Software', inventoryMethod = 'Track inventory', stockQuantity = '10000') {
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
}

export default new AdminCreatePage()

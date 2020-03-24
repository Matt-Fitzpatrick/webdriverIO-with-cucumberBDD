import Page from './page'

class AdminSeoNamesPage extends Page {
  get deleteSelectedButton () { return $('//*[@id="delete-selected"]'); }
  get searchInput () { return $('//*[@id="SeName"]'); }
  get searchButton () { return $('//*[@id="search-senames"]'); }

  open () {
    return super.open('/Admin/Common/SeNames');
  }
  searchResults (title) {
    const path = title.replace(/'/g, '').replace(/\W+/g, '-').toLowerCase();

    this.searchInput.setValue(path);
    this.searchButton.click();
    browser.pause(5000);

    return $$(`//tr[*[starts-with(text(), ${path})]]`).length;
  }
  delete (title) {
    const path = title.replace(/'/g, '').replace(/\W+/g, '-').toLowerCase();
    const checkboxes = $$(`//tr[*[starts-with(text(), ${path})]]//input[@name="checkbox_senames"]`);

    if(checkboxes.length > 0) {
      checkboxes.forEach(checkbox => checkbox.click());
      this.deleteSelectedButton.click();

      const confirmButton = $('//*[@id="delete-selected-action-confirmation-submit-button"]');
      confirmButton.waitForClickable();
      confirmButton.click();
    }

    return this;
  }
}

export default new AdminSeoNamesPage()

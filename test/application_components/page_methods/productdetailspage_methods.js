// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "productdetailspage_locators";

exports.ProductDetailsPage = class ProductDetailsPage {

  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').TestInfo} testInfo
   */


  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightFactory = new PlaywrightFactory(this.page, this.testInfo);
  }


  async goto() {
    await this.page.goto('https://beazleyus-rulebook-nonprod.sequel.com/systest/Quote/Home');
    /* await this.page.setViewportSize({
       width: 1920,
       height: 1080,
     });*/
  }

  async clickAddToBasket() {
    await this.playwrightFactory.click(pageName, 'btn_add_tobasket');
  }
  async productQuantity() {
    await this.playwrightFactory.click(pageName, 'lst_product_quantity');
  }
  async clickBasket() {
    await this.playwrightFactory.click(pageName, 'btn_minicart');
  }
  async productdetails(jsonDataInput) {
    await this.clickAddToBasket();
    await this.productQuantity();
    await this.clickBasket();
  }

}
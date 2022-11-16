// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "searchlistpage_locators";

exports.SearchListerPage = class SearchListerPage {

  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').TestInfo} testInfo
   */


  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightFactory = new PlaywrightFactory(this.page, this.testInfo);
  }


  async selectProduct(strProduct) {
    await this.playwrightFactory.clickDynamic(pageName, 'link_dynamic_productby_text', strProduct);
  }
  
}
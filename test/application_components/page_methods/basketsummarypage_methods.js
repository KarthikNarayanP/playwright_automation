// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "basketsummarypage_locators";

exports.LoginPageMethods = class LoginPageMethods {

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

  async clickProceedtocheckout() {
    await this.playwrightFactory.click(pageName, 'btn_proceedtocheckout');
  }
  async basketsummary(jsonDataInput) {
    await this.clickProceedtocheckout();
  }

}
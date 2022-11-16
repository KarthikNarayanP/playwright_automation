// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "registrationpage_locators";

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

  async enterFirstName(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_firstname', strValue);
  }

  async enterLastName(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_lastname', strValue);
  }
  async enterEmail(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_email', strValue);
  }
  async enterPassword(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_password', strValue);
  }
  async enterConfirmPassword(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_confirmpassword', strValue);
  }
  async clickCreate() {
    await this.playwrightFactory.click(pageName, 'btn_createaccount');
  }
  async registration(jsonDataInput) {
    await this.enterFirstName(jsonDataInput["FirstName"]);
    await this.enterLastName(jsonDataInput["Last Name"]);
    await this.enterEmail(jsonDataInput["Email"]);
    await this.enterPassword(jsonDataInput["Password"]);
    await this.enterConfirmPassword(jsonDataInput["Confirm Password"]);
    await this.clickCreate();
    await this.playwrightFactory.embedScreenshot("Registration - step completion - screenshot");
  }

}
// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "loginpage_locators";

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
    await this.page.goto('http://54.183.60.214:3000/');
    await this.playwrightFactory.embedScreenshot("Pageload Screenshot");
    /* await this.page.setViewportSize({
       width: 1920,
       height: 1080,
     });*/
  }

  async verifyEmailVisible() {
    await this.playwrightFactory.verifyVisible(pageName, 'txt_email');
  }

  async enterEmail(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_email', strValue);
  }

  async enterPassword(strValue) {
    await this.playwrightFactory.sendkeys(pageName, 'txt_password', strValue);
  }

  async clickRegister() {
    await this.playwrightFactory.click(pageName, 'btn_registeraccount');
  }
  async clickLogin() {
    await this.playwrightFactory.click(pageName, 'btn_login');
  }

  async clickMenu() {
    await this.playwrightFactory.click(pageName, 'hamburger_menu');
  }

  async clickLoginMenu() {
    await this.playwrightFactory.click(pageName, 'link_login_menu');
  }
  
  async login(jsonDataInput) {
    await this.clickMenu();
    await this.clickLoginMenu();
    await this.enterEmail(jsonDataInput["Email"]);
    await this.enterPassword(jsonDataInput["Password"]);
    await this.clickLogin();
    await this.playwrightFactory.embedScreenshot("login - step completion - screenshot");
  }

  async verifySuccessfulLogIn() {
    await this.playwrightFactory.verifyVisible(pageName, 'loggedin_account');
  }

  async verifyLoginPageAccessiblity() {
    await this.playwrightFactory.validateAccessibility("LoginPage");
  }

}
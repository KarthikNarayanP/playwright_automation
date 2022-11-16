// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "checkoutpage_locators";

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

    async enterTitle(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_title', strValue);
    }

    async enterFirstName(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_firstname', strValue);
    }
    async enterLastName(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_lastname', strValue);
    }
    async enterAddressLine1(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_addressine1', strValue);
    }
    async enterAddressLine2(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_addressine2', strValue);
    }
    async enterCity(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_city', strValue);
    }
    async enterState(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_state', strValue);
    }
    async enterZipcode(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_zipcode', strValue);
    }
    async clickNext() {
        await this.playwrightFactory.click(pageName, 'btn_next');
    }
    async enterCardNumber(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_cardnumber', strValue);
    }
    async enterNameOnCard(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_nameoncard', strValue);
    }
    async enterExpiryMonth(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_expirymonth', strValue);
    }
    async enterExpiryYear(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_expiryyear', strValue);
    }
    async enterSecurityCode(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_cvv', strValue);
    }
    async clickConfirm() {
        await this.playwrightFactory.click(pageName, 'btn_confirm');
    }
    async confirmationText() {
        await this.playwrightFactory.verifyValue(pageName, 'ele_confirmation');
    }
    async Checkoutpage(jsonDataInput) {
        await this.enterTitle(jsonDataInput["Title"]);
        await this.enterFirstName(jsonDataInput["FirstName"]);
        await this.enterLastName(jsonDataInput["Last Name"]);
        await this.enterAddressLine1(jsonDataInput["Address Line 1"]);
        await this.enterAddressLine2(jsonDataInput["Address Line 2"]);
        await this.enterCity(jsonDataInput["City"]);
        await this.enterState(jsonDataInput["State/Province/Region"]);
        await this.enterZipcode(jsonDataInput["Zipcode"]);
        await this.clickNext();
        await this.enterCardNumber(jsonDataInput["Card Number"]);
        await this.enterNameOnCard(jsonDataInput["Name On Card"]);
        await this.enterExpiryMonth(jsonDataInput["Expiry Month"]);
        await this.enterExpiryYear(jsonDataInput["Expiry Year"]);
        await this.enterSecurityCode(jsonDataInput["Security Code"]);
        await this.clickConfirm();
        await this.confirmationText(jsonDataInput["//*[text()='Thanks for your order!']"]);
        await this.playwrightFactory.embedScreenshot("Checkout - step completion - screenshot");
    }

}
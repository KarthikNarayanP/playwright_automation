// playwright-dev-page.js
const { expect } = require('@playwright/test');
const { PlaywrightFactory } = require('../../utilities/playwright_factory');
let playwrightFactory;
let pageName = "searchpage_locators";

exports.SearchPageMethods = class SearchPageMethods {

    /**
     * @param {import('@playwright/test').Page} page
     * @param {import('@playwright/test').TestInfo} testInfo
     */


    constructor(page, testInfo) {
        this.page = page;
        this.testInfo = testInfo;
        this.playwrightFactory = new PlaywrightFactory(this.page, this.testInfo);
    }

    async enterSearch(strValue) {
        await this.playwrightFactory.sendkeys(pageName, 'txt_search', strValue);
    }
    async clickSearchIcon() {
        await this.playwrightFactory.click(pageName, 'btn_searchIcon');
    }
    async searchProduct(productName) {
        await this.enterSearch(productName);
        await this.clickSearchIcon();
    }

}
// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPageMethods } = require('../../application_components/page_methods/loginpage_methods');
const { SearchPageMethods } = require('../../application_components/page_methods/searchpage_methods');
const { SearchListerPage } = require('../../application_components/page_methods/searchlistpage_methods');
const { ProductDetailsPage } = require('../../application_components/page_methods/productdetailspage_methods');
const fs = require('fs');
let testParentIssueId = "OrderPlacement";


let jsonTestData_TC1 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_4.json', 'utf-8'));

test('[' + jsonTestData_TC1["Testcase"] + '] ' + ' - ' + jsonTestData_TC1["TestcaseDescription"] + ' - ' + jsonTestData_TC1["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC1;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});



let jsonTestData_TC3 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_5.json', 'utf-8'));

test('[' + jsonTestData_TC3["Testcase"] + '] ' + ' - ' + jsonTestData_TC3["TestcaseDescription"] + ' - ' + jsonTestData_TC3["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC3;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC4 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_6.json', 'utf-8'));

test('[' + jsonTestData_TC4["Testcase"] + '] ' + ' - ' + jsonTestData_TC4["TestcaseDescription"] + ' - ' + jsonTestData_TC4["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC4;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC5 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_7.json', 'utf-8'));

test('[' + jsonTestData_TC5["Testcase"] + '] ' + ' - ' + jsonTestData_TC5["TestcaseDescription"] + ' - ' + jsonTestData_TC5["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC5;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC6 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_8.json', 'utf-8'));

test('[' + jsonTestData_TC6["Testcase"] + '] ' + ' - ' + jsonTestData_TC6["TestcaseDescription"] + ' - ' + jsonTestData_TC6["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC6;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC7 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_9.json', 'utf-8'));

test('[' + jsonTestData_TC7["Testcase"] + '] ' + ' - ' + jsonTestData_TC7["TestcaseDescription"] + ' - ' + jsonTestData_TC7["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC7;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC8 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_10.json', 'utf-8'));

test('[' + jsonTestData_TC8["Testcase"] + '] ' + ' - ' + jsonTestData_TC8["TestcaseDescription"] + ' - ' + jsonTestData_TC8["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC8;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC9 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_11.json', 'utf-8'));

test('[' + jsonTestData_TC9["Testcase"] + '] ' + ' - ' + jsonTestData_TC9["TestcaseDescription"] + ' - ' + jsonTestData_TC9["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC9;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC10 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_12.json', 'utf-8'));

test('[' + jsonTestData_TC10["Testcase"] + '] ' + ' - ' + jsonTestData_TC10["TestcaseDescription"] + ' - ' + jsonTestData_TC10["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC10;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC11 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_13.json', 'utf-8'));

test('[' + jsonTestData_TC11["Testcase"] + '] ' + ' - ' + jsonTestData_TC11["TestcaseDescription"] + ' - ' + jsonTestData_TC11["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC11;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC12 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_14.json', 'utf-8'));

test('[' + jsonTestData_TC12["Testcase"] + '] ' + ' - ' + jsonTestData_TC12["TestcaseDescription"] + ' - ' + jsonTestData_TC12["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC12;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC13 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_15.json', 'utf-8'));

test('[' + jsonTestData_TC13["Testcase"] + '] ' + ' - ' + jsonTestData_TC13["TestcaseDescription"] + ' - ' + jsonTestData_TC13["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC13;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC14 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_16.json', 'utf-8'));

test('[' + jsonTestData_TC14["Testcase"] + '] ' + ' - ' + jsonTestData_TC14["TestcaseDescription"] + ' - ' + jsonTestData_TC14["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC14;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC15 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_17.json', 'utf-8'));

test('[' + jsonTestData_TC15["Testcase"] + '] ' + ' - ' + jsonTestData_TC15["TestcaseDescription"] + ' - ' + jsonTestData_TC15["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC15;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC16 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_18.json', 'utf-8'));

test('[' + jsonTestData_TC16["Testcase"] + '] ' + ' - ' + jsonTestData_TC16["TestcaseDescription"] + ' - ' + jsonTestData_TC16["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC16;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


let jsonTestData_TC17 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_19.json', 'utf-8'));

test('[' + jsonTestData_TC17["Testcase"] + '] ' + ' - ' + jsonTestData_TC17["TestcaseDescription"] + ' - ' + jsonTestData_TC17["Tags"], async ({ page }) => {
  let testData = jsonTestData_TC17;
  const loginPageMethods = new LoginPageMethods(page, test.info());
  const searchPageMethods = new SearchPageMethods(page, test.info());
  const searchListerPage = new SearchListerPage(page, test.info());
  const productDetailsPage = new ProductDetailsPage(page, test.info());
  await loginPageMethods.goto();
  await loginPageMethods.login(testData);
  await searchPageMethods.searchProduct(testData["ProductSearch"]);
  await searchListerPage.selectProduct(testData["ProductSearch"]);
  await productDetailsPage.clickAddToBasket();
});


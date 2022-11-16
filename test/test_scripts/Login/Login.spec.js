// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPageMethods } = require('../../application_components/page_methods/loginpage_methods');
const fs = require('fs');
let testParentIssueId = "Login";


  let jsonTestData_TC1 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_2.json', 'utf-8'));

test('[2] '+ jsonTestData_TC1["Testcase"] + ' - ' + jsonTestData_TC1["TestcaseDescription"] + ' - ' + jsonTestData_TC1["Tags"], async ({ page }) => {
      const loginPageMethods = new LoginPageMethods(page, test.info());
      await loginPageMethods.goto(); 
      await loginPageMethods.login(jsonTestData_TC1); 
      await loginPageMethods.clickMenu();
      await loginPageMethods.verifySuccessfulLogIn();
   });

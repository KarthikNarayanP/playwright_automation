// @ts-check
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const { LoginPageMethods } = require('../../application_components/page_methods/loginpage_methods');
const fs = require('fs');
let testParentIssueId = "Login";


  let jsonTestData_TC1 = JSON.parse(fs.readFileSync('./test/data/' + testParentIssueId + '/TC_11.json', 'utf-8'));

test('[11] '+ jsonTestData_TC1["Testcase"] + ' - ' + jsonTestData_TC1["TestcaseDescription"] + ' - ' + jsonTestData_TC1["Tags"], async ({ page }) => {
      const loginPageMethods = new LoginPageMethods(page, test.info());
      await loginPageMethods.goto(); 
      await loginPageMethods.clickMenu();
      await loginPageMethods.clickLoginMenu();
      await loginPageMethods.verifyEmailVisible();
      
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      await test.info().attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      });
      expect(accessibilityScanResults.violations).toEqual([]);
   });

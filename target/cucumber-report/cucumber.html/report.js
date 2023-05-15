$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "As user I want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4246992200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"standard_user\" in usernamefield",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"secret_sauce\" in Passwordfield",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see the text \"Products\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnLoginpage()"
});
formatter.result({
  "duration": 92369700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterUsernameInUsernamefield(String)"
});
formatter.result({
  "duration": 177210200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPasswordInPasswordfield(String)"
});
formatter.result({
  "duration": 82707400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 152719000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 34
    }
  ],
  "location": "LoginPageSteps.iShouldBeAbleToSeeTheText(String)"
});
formatter.result({
  "duration": 53650100,
  "status": "passed"
});
formatter.after({
  "duration": 743302200,
  "status": "passed"
});
formatter.before({
  "duration": 2711058200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to verify That Six Products Are Displayed On Page",
  "description": "",
  "id": "login-test;user-should-able-to-verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"standard_user\" in usernamefield",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"secret_sauce\" in Passwordfield",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should be able to see 6 products on page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnLoginpage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterUsernameInUsernamefield(String)"
});
formatter.result({
  "duration": 153748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPasswordInPasswordfield(String)"
});
formatter.result({
  "duration": 142269100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 119959200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "LoginPageSteps.iShouldBeAbleToSeeProductsOnPage(int)"
});
formatter.result({
  "duration": 32994100,
  "status": "passed"
});
formatter.after({
  "duration": 683735600,
  "status": "passed"
});
});
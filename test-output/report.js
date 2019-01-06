$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Workspace_Selenium/FreeCRMBDDframework/src/main/java/com/Features/ContactFeature.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Login \u0026 Contact Feature",
  "description": "",
  "id": "freecrm-login-\u0026-contact-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#With Example Keyword"
    }
  ],
  "line": 3,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already is login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the New Contact",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters contact\"\u003cfirstname\u003e\" \"\u003clastname\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "company"
      ],
      "line": 14,
      "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario;;1"
    },
    {
      "cells": [
        "Nayeemjohn",
        "Vino@1702",
        "Sabarish",
        "Elango",
        "zoho"
      ],
      "line": 15,
      "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario;;2"
    },
    {
      "cells": [
        "Nayeemjohn",
        "Vino@1702",
        "Logesh",
        "Palanivel",
        "Cognizant"
      ],
      "line": 16,
      "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already is login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"Nayeemjohn\" and \"Vino@1702\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the New Contact",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters contact\"Sabarish\" \"Elango\" and \"zoho\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_is_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_FreeCRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nayeemjohn",
      "offset": 13
    },
    {
      "val": "Vino@1702",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_the_New_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sabarish",
      "offset": 20
    },
    {
      "val": "Elango",
      "offset": 31
    },
    {
      "val": "zoho",
      "offset": 44
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "FreeCRM Login Test Scenario",
  "description": "",
  "id": "freecrm-login-\u0026-contact-feature;freecrm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already is login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Page Title is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"Nayeemjohn\" and \"Vino@1702\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on the New Contact",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters contact\"Logesh\" \"Palanivel\" and \"Cognizant\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_is_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.page_Title_is_FreeCRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nayeemjohn",
      "offset": 13
    },
    {
      "val": "Vino@1702",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_the_New_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logesh",
      "offset": 20
    },
    {
      "val": "Palanivel",
      "offset": 29
    },
    {
      "val": "Cognizant",
      "offset": 45
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});
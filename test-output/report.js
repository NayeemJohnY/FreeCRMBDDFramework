$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Workspace_Selenium/FreeCRMBDDframework/src/main/java/com/Features/DealsFeature.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Deals Data Feature",
  "description": "",
  "id": "freecrm-deals-data-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "FreeCRM Deal Test Scenario",
  "description": "",
  "id": "freecrm-deals-data-feature;freecrm-deal-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "Nayeemjohn",
        "Vino@1702"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User moves to Deals Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_already_is_login_Page()"
});
formatter.result({
  "duration": 128282062909,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.page_Title_is_FreeCRM()"
});
formatter.result({
  "duration": 1191188066,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 14166011198,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 17995785844,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_HomePage()"
});
formatter.result({
  "duration": 13514884,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_Deals_Page()"
});
formatter.result({
  "duration": 4376708152,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 1033999428,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 2474073881,
  "status": "passed"
});
});
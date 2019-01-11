$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Workspace_Selenium/FreeCRMBDDframework/src/main/java/com/Features/DealsMapFeature.feature");
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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "Nayeemjohn",
        "Vino@1702"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User moves to Deals Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "deal 1",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "deal 2",
        "2000",
        "30",
        "40"
      ],
      "line": 15
    },
    {
      "cells": [
        "deal 3",
        "3000",
        "60",
        "70"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "DealaMapStepDefinition.user_is_already_is_login_Page()"
});

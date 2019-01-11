$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Workspace_Selenium/FreeCRMBDDframework/src/main/java/com/Features/HooksBackGround.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Funtional Feature",
  "description": "",
  "id": "free-crm-funtional-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FuntionalTest"
    }
  ]
});
formatter.before({
  "duration": 32935510728,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already is login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Page Title is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "Nayeemjohn",
        "Vino@1702"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.match({
  "location": "HooksBackGroundSteps.user_is_already_is_login_Page()"
});
formatter.result({
  "duration": 23214288043,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.page_Title_is_FreeCRM()"
});
formatter.result({
  "duration": 437820665,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 16419164873,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 14464138011,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_is_on_HomePage()"
});
formatter.result({
  "duration": 29996583,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "FreeCRM ContactsPage Test Scenario",
  "description": "",
  "id": "free-crm-funtional-feature;freecrm-contactspage-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@End2EndTest"
    },
    {
      "line": 13,
      "name": "@RegressionTest"
    },
    {
      "line": 13,
      "name": "@Contacts"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Click on the New Contact",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters contact details",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "company"
      ],
      "line": 18
    },
    {
      "cells": [
        "Sabarish",
        "Elango",
        "zoho"
      ],
      "line": 19
    },
    {
      "cells": [
        "Logesh",
        "Palanivel",
        "Cognizant"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HooksBackGroundSteps.user_is_on_HomePage()"
});
formatter.result({
  "duration": 6664163,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.click_on_the_New_Contact()"
});
formatter.result({
  "duration": 4755039781,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_enters_contact_details(DataTable)"
});
formatter.result({
  "duration": 14140746788,
  "status": "passed"
});
formatter.after({
  "duration": 3189311619,
  "status": "passed"
});
formatter.before({
  "duration": 11244905278,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already is login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Page Title is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "Nayeemjohn",
        "Vino@1702"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on HomePage",
  "keyword": "And "
});
formatter.match({
  "location": "HooksBackGroundSteps.user_is_already_is_login_Page()"
});
formatter.result({
  "duration": 6306296119,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.page_Title_is_FreeCRM()"
});
formatter.result({
  "duration": 15931685,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 335370176,
  "status": "passed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 903842973,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"submit\" value\u003d\"Login\" class\u003d\"btn btn-small\"\u003e is not clickable at point (1183, 117). Other element would receive the click: \u003cdiv id\u003d\"preloader\" style\u003d\"opacity: 0.582678;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LOGESH\u0027, ip: \u0027192.168.204.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\LOGESH~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 61d81f2f9a3b3e5dc43616e6b393d1c6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.StepDefinition.HooksBackGroundSteps.user_clicks_on_Login_Button(HooksBackGroundSteps.java:89)\r\n\tat ✽.Then User clicks on Login Button(F:/Workspace_Selenium/FreeCRMBDDframework/src/main/java/com/Features/HooksBackGround.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "FreeCRM DealsPage Test Scenario",
  "description": "",
  "id": "free-crm-funtional-feature;freecrm-dealspage-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SmokeTest"
    },
    {
      "line": 22,
      "name": "@End2EndTest"
    },
    {
      "line": 22,
      "name": "@Deals"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User moves to Deals Page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 27
    },
    {
      "cells": [
        "deal 1",
        "1000",
        "50",
        "10"
      ],
      "line": 28
    },
    {
      "cells": [
        "deal 2",
        "2000",
        "30",
        "40"
      ],
      "line": 29
    },
    {
      "cells": [
        "deal 3",
        "3000",
        "60",
        "70"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HooksBackGroundSteps.user_is_on_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_moves_to_Deals_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksBackGroundSteps.user_enters_deals_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2738843654,
  "status": "passed"
});
});
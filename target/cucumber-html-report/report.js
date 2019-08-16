$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EdurekaLogin.feature");
formatter.feature({
  "line": 1,
  "name": "ScenarioExample Outline",
  "description": "",
  "id": "scenarioexample-outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login functionality for a social networking site",
  "description": "",
  "id": "scenarioexample-outline;login-functionality-for-a-social-networking-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to Site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on SignIN link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "scenarioexample-outline;login-functionality-for-a-social-networking-site;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "scenarioexample-outline;login-functionality-for-a-social-networking-site;;1"
    },
    {
      "cells": [
        "kanchan.bagale@softenger.com",
        "kanchu@333"
      ],
      "line": 13,
      "id": "scenarioexample-outline;login-functionality-for-a-social-networking-site;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionality for a social networking site",
  "description": "",
  "id": "scenarioexample-outline;login-functionality-for-a-social-networking-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user navigates to Site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on SignIN link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"kanchan.bagale@softenger.com\" and \"kanchu@333\" Password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_navigates_to_Site()"
});
formatter.result({
  "duration": 18430711426,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_on_SignIN_link()"
});
formatter.result({
  "duration": 1082767890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kanchan.bagale@softenger.com",
      "offset": 18
    },
    {
      "val": "kanchu@333",
      "offset": 53
    }
  ],
  "location": "LoginTest.i_enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 1415572779,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_on_Login_button()"
});
formatter.result({
  "duration": 140009146,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.login_should_be_successful()"
});
formatter.result({
  "duration": 2185602419,
  "status": "passed"
});
});
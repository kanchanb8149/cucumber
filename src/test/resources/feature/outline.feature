Feature: ScenarioExample Outline

Scenario Outline: Login functionality for a social networking site

Given user navigates to Site

When I enter Username "<Username>" and "<Password>" Password 

Then login should be unsuccessful
Examples:
| Username |  Password  |
| Kanchan  | password1  | 
| Komal    | password2  | 
| Chandan  | password3  |
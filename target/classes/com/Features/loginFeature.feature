Feature: FreeCRM Login Feature

#Normal
#Scenario: FreeCRM Login Test Scenario
#Given  User is already is login Page
#When 	 Page Title is FreeCRM
#Then 	 User enters username and password
#Then 	 User clicks on Login Button
#And 	 User is on HomePage

#Without Example Keyword
#Scenario: FreeCRM Login Test Scenario
#Given  User is already is login Page
#When 	 Page Title is FreeCRM
#Then 	 User enters "Nayeemjohn" and "Vino@1702"
#Then 	 User clicks on Login Button
#And 	 User is on HomePage

#With Example Keyword
Scenario Outline: FreeCRM Login Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters "<username>" and "<password>"
Then 	 User clicks on Login Button
And 	 User is on HomePage
And 	 Close the Browser

Examples:
| username | password |
| Tom			| Dep@123 |
| Nayeemjohn| Vino@1702|

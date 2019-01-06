Feature: FreeCRM Login & Contact Feature
#With Example Keyword
Scenario Outline: FreeCRM Login Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters "<username>" and "<password>"
Then 	 User clicks on Login Button
And 	 User is on HomePage
And 	 Click on the New Contact
And 	 User enters contact"<firstname>" "<lastname>" and "<company>"
And 	 Close the Browser

Examples:
| username | password |firstname|lastname|company|
|Nayeemjohn| Vino@1702 |Sabarish|Elango|zoho|
| Nayeemjohn| Vino@1702|Logesh|Palanivel|Cognizant|

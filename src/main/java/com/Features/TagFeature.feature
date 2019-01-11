@FuntionalTest
Feature: Free CRM Funtional Feature

@SmokeTest @RegressionTest
Scenario: FreeCRM Login Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters username and password
|username|password|
|Nayeemjohn|Vino@1702|
Then 	 User clicks on Login Button
And 	 User is on HomePage
And 	 Close the Browser

@End2EndTest @RegressionTest
Scenario: FreeCRM ContactsPage Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters username and password
|username|password|
|Nayeemjohn|Vino@1702|
Then 	 User clicks on Login Button
And 	 User is on HomePage
When   Click on the New Contact
Then  User enters contact details
		|firstname|lastname|company|
		|Sabarish|Elango|zoho|
		|Logesh|Palanivel|Cognizant|
And 	 Close the Browser

@SmokeTest@End2EndTest 
Scenario: FreeCRM DealsPage Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters username and password
|username|password|
|Nayeemjohn|Vino@1702|
Then 	 User clicks on Login Button
And 	 User is on HomePage
When   User moves to Deals Page
Then   User enters deals details
|title|amount|probability|commission|
|deal 1|1000|50|10|
|deal 2|2000|30|40|
|deal 3|3000|60|70|
And 	 Close the Browser


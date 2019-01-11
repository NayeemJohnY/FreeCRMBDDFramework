Feature: FreeCRM Deals Data Feature

Scenario: FreeCRM Deal Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters username and password
|username|password|
|Nayeemjohn|Vino@1702|
Then 	 User clicks on Login Button
And 	 User is on HomePage
And 	 User moves to Deals Page
And 	 User enters deals details
|title|amount|probability|commission|
|deal 1|1000|50|10|
|deal 2|2000|30|40|
|deal 3|3000|60|70|

And 	 Close the Browser
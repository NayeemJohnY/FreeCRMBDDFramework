Feature: FreeCRM Deals Data Feature

Scenario: FreeCRM Deal Test Scenario
Given  User is already is login Page
When 	 Page Title is FreeCRM
Then 	 User enters username and password
|Nayeemjohn|Vino@1702|
Then 	 User clicks on Login Button
And 	 User is on HomePage
And 	 User moves to Deals Page
And 	 User enters deals details
|test deal|1000|50|10|

And 	 Close the Browser
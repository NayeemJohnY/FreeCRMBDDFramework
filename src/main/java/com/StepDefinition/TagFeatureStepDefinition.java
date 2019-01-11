/*package com.StepDefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TagFeatureStepDefinition {

	WebDriver driver;
	
	@Given("^User is already is login Page$")
	public void user_is_already_is_login_Page()  {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "F:\\Workspace_Selenium\\NovemberSelenium\\lib\\chromedriver_win32\\chromedriver.exe");
		 driver= new ChromeDriver();
		 driver.get("https://www.freecrm.com");
		 driver.manage().window().maximize();
	    
	}

	

	@When("^Page Title is FreeCRM$")
	public void page_Title_is_FreeCRM() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(driver.getTitle());
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", driver.getTitle());

	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.xpath("//*[@type='password']")).sendKeys(data.get("password"));
		}

	}
	
	@Then("^User clicks on Login Button$")
	public void user_clicks_on_Login_Button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.cssSelector("input[value='Login']")).click();
	   
	}
	
	
	@Then("^User is on HomePage$")
	public void user_is_on_HomePage()  {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals("CRMPRO",driver.getTitle());
		
	   
	}
	@Then("^Click on the New Contact$")
	public void click_on_the_New_Contact()  {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.switchTo().frame("mainpanel");
		WebElement linkContacts=driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
		WebElement linkNewContact=driver.findElement(By.xpath("//a[contains(text(),'New Contact')]"));
		Actions action= new Actions(driver);
		action.moveToElement(linkContacts).build().perform();
		linkNewContact.click();
		
	}
	
	@Then("^User enters contact details$")
	public void user_enters_contact_details(DataTable contact) {
		
		for(Map<String,String>data:contact.asMaps(String.class, String.class))
		{
			WebElement txtFirstName=driver.findElement(By.id("first_name"));
			txtFirstName.sendKeys(data.get("firstname"));
			WebElement txtLastName=driver.findElement(By.id("surname"));
			txtLastName.sendKeys(data.get("lastname"));
			WebElement txtcompany=driver.findElement(By.xpath("//*[@name='client_lookup']"));
			txtcompany.sendKeys(data.get("company"));
			WebElement BtnSave=driver.findElement(By.xpath("//input[@value='Save']"));
			BtnSave.click();
			WebElement linkContacts=driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
			WebElement linkNewContact=driver.findElement(By.xpath("//a[contains(text(),'New Contact')]"));
			Actions action= new Actions(driver);
			action.moveToElement(linkContacts).build().perform();
			linkNewContact.click();
		}
	}
	
	@When("^User moves to Deals Page$")
	public void user_moves_to_Deals_Page()  {
	    // Write code here that turns the phrase above into concrete actions
		driver.switchTo().frame("mainpanel");
		WebElement linkDeal=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		WebElement linkNewDeal=driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
		Actions action= new Actions(driver);
		action.moveToElement(linkDeal).build().perform();
		linkNewDeal.click();
	}
	
	@Then("^User enters deals details$")
	public void user_enters_deals_details(DataTable Deals) {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		for (Map<String, String> dealData : Deals.asMaps(String.class, String.class)) {
			driver.findElement(By.xpath("//*[@id='title']")).sendKeys(dealData.get("title"));
			driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(dealData.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(dealData.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(dealData.get("commission"));
			driver.findElement(By.xpath("//*[@value='Save']")).click();
			WebElement linkDeal = driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
			WebElement linkNewDeal = driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
			Actions action = new Actions(driver);
			action.moveToElement(linkDeal).build().perform();
			linkNewDeal.click();

		}
	}
	
	@Then("^Close the Browser$")
	public void close_the_Browser() {
	    // Write code here that turns the phrase above into concrete actions
		driver.quit();
	}
}
*/
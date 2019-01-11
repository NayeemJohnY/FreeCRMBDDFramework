/*package com.StepDefinition;

import java.util.List;
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

public class DealaMapStepDefinition {
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
		for (Map<String,String>data :credentials.asMaps(String.class, String.class))
		{
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
	@Then("^User moves to Deals Page$")
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
	public void user_enters_deals_details(DataTable Deals)  {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		for(Map <String,String> dealData :Deals.asMaps(String.class, String.class))
				{
		driver.findElement(By.xpath("//*[@id='title']")).sendKeys(dealData.get("title"));
		driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(dealData.get("amount"));
		driver.findElement(By.id("probability")).sendKeys(dealData.get("probability"));
		driver.findElement(By.id("commission")).sendKeys(dealData.get("commission"));
		driver.findElement(By.xpath("//*[@value='Save']")).click();
		WebElement linkDeal=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
		WebElement linkNewDeal=driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"));
		Actions action= new Actions(driver);
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
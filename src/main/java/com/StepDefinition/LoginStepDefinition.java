package com.StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
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
	//@Then("^User enters username and password$")
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password)  {
	    // Write code here that turns the phrase above into concrete actions
		/*WebDriverWait wait= new WebDriverWait(driver,70);
		WebElement frameChatPopup=driver.findElement(By.xpath("//iframe[contains(@name, 'intercom-borderless-frame')]"));
		wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(frameChatPopup));
		Actions action= new Actions (driver);
		WebElement chatPopup=driver.findElement(By.xpath("//span[text()='Cogmento']"));
		WebElement btnclosePopup=driver.findElement(By.xpath("//*[@role='button']"));
		action.moveToElement(chatPopup).build().perform();
	  	btnclosePopup.click();*/
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.xpath("//*[@type='password']")).sendKeys(password);
	   
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
	@Then("^Close the Browser$")
	public void close_the_Browser() {
	    // Write code here that turns the phrase above into concrete actions
		driver.quit();
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

	@Then("^User enters contact\"([^\"]*)\" \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_and(String firstname, String lastname, String company) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement txtFirstName=driver.findElement(By.id("first_name"));
		txtFirstName.sendKeys(firstname);
		WebElement txtLastName=driver.findElement(By.id("surname"));
		txtLastName.sendKeys(lastname);
		WebElement txtcompany=driver.findElement(By.xpath("//*[@name='client_lookup']"));
		txtcompany.sendKeys(company);
		WebElement BtnSave=driver.findElement(By.xpath("//input[@value='Save']"));
		BtnSave.click();
}
}

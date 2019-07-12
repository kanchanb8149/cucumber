package dataTable;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 



public class OutilineStepDefi { 
   WebDriver driver = null; 
	
   @Given("^user navigates to Site$") 
   public void goToFacebook() { 
	   
	System.out.println("Called openBrowser");
   	String path = System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\chromedriver.exe";
   	System.out.println(path);
	System.setProperty("webdriver.chrome.driver", path);
   	driver = new ChromeDriver();
   	driver.manage().deleteAllCookies();
   	driver.manage().window().maximize();   
   	driver.navigate().to("https://mysoftenger.com/LaddersCommon/Login.aspx"); 
   } 
   
   
   @When("^I enter Username \"(.*?)\" and \"(.*?)\" Password$")
   public void i_enter_Username_and_Password(String arg1, String arg2) throws Throwable 
   {
	   
	   		System.out.println("inside i_enter_Username_and_Password()");
			driver.findElement(By.id("txtEmailId")).sendKeys(arg1);
			driver.findElement(By.id("txtPassword")).sendKeys(arg2);
			Thread.sleep(2000);
			driver.findElement(By.id("btnLogin")).click();       
   }  
   
   @Then("^login should be unsuccessful$") 
   public void validateRelogin() { 
      if(driver.getCurrentUrl().equalsIgnoreCase("https://mysoftenger.com/LaddersHR/Dashboard/EmployeeDashboard.aspx"))
      {
         System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      } 
      driver.close(); 
   }    
}
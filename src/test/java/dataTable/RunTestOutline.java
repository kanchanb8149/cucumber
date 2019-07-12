package dataTable;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\CucumberWorkspace\\CucumberJVMExamples-master\\DataTableCucumber2\\src\\test\\resources\\feature\\outline.feature",
		plugin = {"pretty", "html:target/cucumber-html-report","json:cucumber.json"},
		tags = {}
		
			)
public class RunTestOutline{
	
}
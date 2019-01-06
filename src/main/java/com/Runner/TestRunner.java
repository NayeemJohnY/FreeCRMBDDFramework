package com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="F:\\Workspace_Selenium\\FreeCRMBDDframework\\src\\main\\java\\com\\Features\\ContactFeature.feature"
		,glue={"com.StepDefinition"}
		,format={"pretty","html:test-output" , "json:json-output/cucumber.json","junit:junit-output/cucmberJunit.xml"}
		,dryRun=true
				,monochrome=true
		,strict=true	
		)
public class TestRunner {

}

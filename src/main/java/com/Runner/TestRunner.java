package com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="F:\\Workspace_Selenium\\FreeCRMBDDframework\\src\\main\\java\\com\\Features\\HooksBackGround.feature"
		,glue={"com.StepDefinition"}
		,format={"pretty","html:test-output" , "json:json-output/cucumber.json","junit:junit-output/cucmberJunit.xml"}
		,dryRun=false
				,monochrome=true
		,strict=true
		//,tags={"~@SmokeTest, @End2EndTest"}
		)//~ other than given
//{"@SmokeTest", "@RegressionTest"}-AND
//{"@SmokeTest, @RegressionTest"}-OR
//{"~@SmokeTest", "@End2EndTest"} Other than End2EndTest where Smoke Tag is not
//{"~@SmokeTest, @End2EndTest"} eithr one passes
public class TestRunner {

}

package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginPageSteps {
    @Given("^I am on login page$")
    public void iAmOnLoginpage() {

    }

    @When("^I enter username \"([^\"]*)\" in usernamefield$")
    public void iEnterUsernameInUsernamefield(String username) {

        new LoginPage().enterUsername("standard_user");
    }

    @And("^I enter password \"([^\"]*)\" in Passwordfield$")
    public void iEnterPasswordInPasswordfield(String password) {
        new LoginPage().enterPassword("secret_sauce");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }

    @And("^I should be able to see the text \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeTheText(String headingText) {
        Assert.assertEquals(headingText ,new LoginPage().getHeadingText(),"Text has not displayed");

    }


    @And("^I should be able to see (\\d+) products on page$")
    public void iShouldBeAbleToSeeProductsOnPage(int totalProduct) {
        Assert.assertEquals(totalProduct ,new LoginPage().countTotalProduct(),"Total products has not displayed");

    }
}

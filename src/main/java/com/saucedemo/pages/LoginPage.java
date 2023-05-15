package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath ="//span[@class='title']" )
    WebElement headingText ;
    @CacheLookup
    @FindBy(id="user-name")
   WebElement usernameField ;

    @CacheLookup
    @FindBy(id ="password")
    WebElement passwordField ;

    @CacheLookup
    @FindBy(xpath ="//input[@id='login-button']" )
    WebElement loginButton ;

    @CacheLookup
    @FindBy (xpath= "//span[contains(text(),'Products')]")
    WebElement textProduct;
    @CacheLookup
    @FindBy(xpath= "//div[@class ='inventory_item']")
    List<WebElement> totalProduct ;

    public String getHeadingText(){
        log.info("Get text from : " + headingText.toString());

        return getTextFromElement(headingText);
    }
    public void enterUsername(String username){
        sendTextToElement(usernameField,username);

       log.info("Enter username  : " + usernameField.toString());




    }
    public void enterPassword(String password){
        sendTextToElement(passwordField,password);

        log.info("Enter password to : " + passwordField.toString());


    }
    public void clickLoginButton(){
        clickOnElement(loginButton);

        log.info("Clicking on login button : " + loginButton.toString());


    }
    public int countTotalProduct(){

        log.info("Count products : " + totalProduct.toString());
        return countItem(totalProduct);


    }
}

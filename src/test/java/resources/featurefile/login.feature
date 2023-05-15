Feature: Login test
  As user I want to login into saucedemo website

  @sanity @regression
  Scenario: User should login successfully with valid credentials
    Given I am on login page
    When  I enter username "standard_user" in usernamefield
    And   I enter password "secret_sauce" in Passwordfield
    And   I click on login button
    Then  I should login successfully
    And   I should be able to see the text "Products"

  @smoke @regression
  Scenario: User should able to verify That Six Products Are Displayed On Page
    Given I am on login page
    When  I enter username "standard_user" in usernamefield
    And   I enter password "secret_sauce" in Passwordfield
    And   I click on login button
    Then  I should login successfully
    And   I should be able to see 6 products on page


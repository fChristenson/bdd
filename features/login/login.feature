Feature: Login

  As a user I should be able to login to the application if I provide the right name and password.
  Otherwise I should be shown a login failed page.

  Scenario: As a user I can login
    Given I am on the "login" page
    And I enter "foo" as my "name"
    And I enter "bar" as my "password"
    When I click the "login-btn" button
    Then I should be on the "login success" page

  Scenario: As a user I will see a failed login screen if I fail the login
    Given I am on the "login" page
    And I enter "fail" as my "name"
    And I enter "fail" as my "password"
    When I click the "login-btn" button
    Then I should be on the "login failed" page

  Scenario Outline: As a user I will not be able to submit the form if the name or password has a invalid length or invalid characters
    Given I am on the "login" page
    And I enter <name> as my "name"
    And I enter <password> as my "password"
    When I click the "login-btn" button
    Then I should be on the "login" page
    Examples:
      | name                                   | password                                   |
      | "a"                                    | "bar"                                      |
      | "ab"                                   | "bar"                                      |
      | "thisisaverylongnameandwillnotbevalid" | "bar"                                      |
      | ";;;"                                  | "bar"                                      |
      | "foo"                                  | "a"                                        |
      | "foo"                                  | "ab"                                       |
      | "foo"                                  | "thisisaverylongpasswordandwillnotbevalid" |
      | "foo"                                  | ";;;"                                      |

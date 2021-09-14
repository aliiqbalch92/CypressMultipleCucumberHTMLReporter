Feature: Login
    @Smoke
    Scenario: Login with correct username and password

    Given User has navigated to login url
    When User provides credentials 
        |username|password|
        |iosdev|iosdev2|
    And User clicks login
    Then User is logged in
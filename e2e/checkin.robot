*** Settings ***
Library   Selenium2Library


# Test teardown   Close Browser
Test teardown   Close Browser

*** Variables ***


*** Test Cases ***

test clickcheckin
  Open Browser        http://localhost:3000/   chrome
  Location Should Be    http://localhost:3000/
  Click Element    checkin
  Wait Until Page Contains Element      fromSubmit
  Wait Until Page Contains Element      InputRe
  Wait Until Page Contains Element      InputRfid
  Input Text        InputRe     7777
  Input Text        InputRfid     1  
  Wait Until Page Contains Element      btnSubmit
  Wait Until Page Contains Element      btnCancel
  Click Element    btnSubmit
  Wait Until Page Contains Element      fromSuccess
  Wait Until Page Contains Element      btnOK
  Click Element    btnOK
  Sleep   3s


test clickcheckin
  Open Browser        http://localhost:3000/?car_size=50   chrome
  Location Should Be    http://localhost:3000/?car_size=50
  Wait Until Page Contains Element      Disable
  Sleep    3s



*** Keywords ***

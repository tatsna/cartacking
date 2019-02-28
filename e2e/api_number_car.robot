*** Settings ***
Library     Collections
Library     RequestsLibrary

*** Test Cases ***
Get Requests
        Create Session      api      http://127.0.0.1:8000/number_car
        ${resp}=        Get Request     api      /
        Should Be Equal As Strings      ${resp.status_code}     200


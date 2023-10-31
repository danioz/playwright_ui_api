# [TC-ID] : Update user

## Description

Check endpoint PUT /user/{{userName}} Updated user

## Test Steps

1. Login as user by sending request GET /user/login?username={{userName}}&password={{password}}
2. Send request to endpoint /user/{{userName}} with valid body

## Expected Result

1. User is log in. Response has status 200.
2. User is updated. Response has status 200.

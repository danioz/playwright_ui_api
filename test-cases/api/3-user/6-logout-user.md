# [TC-ID] : Logout user

## Description

Check endpoint /user/logout
Logs out current logged in user session

## Test Steps

1. Login as user by sending request GET /userlogin?username={{userName}}&password={{password}} with valid parameters
2. Logs out current user session GET / user/logout

## Expected Result

1. User is log in. Response has status 200.
2. User is logged out. Response has status 200.

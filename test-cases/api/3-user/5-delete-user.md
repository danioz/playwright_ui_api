# [TC-ID] : Delete user

## Description

Check endpoint DELETE /user/{{userName}} Updated user

## Test Steps

1. Login as user by sending request GET /user/login?username={{userName}}&password={{password}}
2. Send DELETE request to endpoint /user/{{userName}}

## Expected Result

1. User is log in. Response has status 200.
2. User is deleted. Response has status 200.

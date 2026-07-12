# Registration API Test Cases

## API Endpoint Description

```text

POST /register

Request body:

{

  "email": "[newuser@example.com](mailto:newuser@example.com)",

  "password": "Password123"

}

Expected behavior:

If the email is not already registered and the password is valid, the API creates a new user account and returns a successful response.

```

## Prompt Used

API Test Prompt v1

## AI Output

## 1. API Summary

The `/register` endpoint allows a new user to create an account by sending an email and password. If the email is not already registered and the password meets product requirements, the API should create the account and return a successful response.

## 2. Assumptions

- The endpoint uses the `POST` method.

- The request body requires `email` and `password`.

- The API validates email format.

- The API checks whether the email is already registered.

- The API validates password rules.

- The API should not expose passwords or sensitive internal data in the response.

- Exact password rules are not provided and should be confirmed.

## 3. Test Scenarios

- New user registers successfully with valid email and password.

- User tries to register with an already registered email.

- User tries to register with invalid email format.

- User submits request with missing email.

- User submits request with missing password.

- User submits empty request body.

- User tries to register with weak password.

- API does not expose sensitive data in the response.

## 4. Positive API Test Cases

### TC-API-001: Register with valid email and password

- Test Case ID: TC-API-001

- Type: Positive

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "email": "[newuser@example.com](mailto:newuser@example.com)",

  "password": "Password123"

}

```

- Expected Status Code: 201

- Expected Response:

```json

{

  "message": "Account created successfully"

}

```

- Priority: High

- Severity: Critical

- Notes: Exact response body may depend on product requirements.

## 5. Negative API Test Cases

### TC-API-002: Register with already registered email

- Test Case ID: TC-API-002

- Type: Negative

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "email": "[existinguser@example.com](mailto:existinguser@example.com)",

  "password": "Password123"

}

```

- Expected Status Code: 409

- Expected Response:

```json

{

  "error": "Email is already registered"

}

```

- Priority: High

- Severity: Major

- Notes: Some APIs may return 400 instead of 409. This should be confirmed with product or backend requirements.

### TC-API-003: Register with invalid email format

- Test Case ID: TC-API-003

- Type: Negative

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "email": "invalid-email",

  "password": "Password123"

}

```

- Expected Status Code: 400

- Expected Response:

```json

{

  "error": "Invalid email format"

}

```

- Priority: Medium

- Severity: Minor

- Notes: API should validate email format before creating an account.

### TC-API-004: Register with missing email

- Test Case ID: TC-API-004

- Type: Negative

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "password": "Password123"

}

```

- Expected Status Code: 400

- Expected Response:

```json

{

  "error": "Email is required"

}

```

- Priority: Medium

- Severity: Major

- Notes: Exact validation message may depend on product requirements.

### TC-API-005: Register with missing password

- Test Case ID: TC-API-005

- Type: Negative

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "email": "[newuser@example.com](mailto:newuser@example.com)"

}

```

- Expected Status Code: 400

- Expected Response:

```json

{

  "error": "Password is required"

}

```

- Priority: Medium

- Severity: Major

- Notes: Exact validation message may depend on product requirements.

### TC-API-006: Register with weak password

- Test Case ID: TC-API-006

- Type: Negative

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "email": "[newuser@example.com](mailto:newuser@example.com)",

  "password": "123"

}

```

- Expected Status Code: 400

- Expected Response:

```json

{

  "error": "Password does not meet requirements"

}

```

- Priority: Medium

- Severity: Major

- Notes: Exact password rules are not provided and should be confirmed.

## 6. Edge Cases

### TC-API-007: Register with empty request body

- Test Case ID: TC-API-007

- Type: Edge

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{}

```

- Expected Status Code: 400

- Expected Response:

```json

{

  "error": "Email and password are required"

}

```

- Priority: Medium

- Severity: Major

- Notes: API should handle empty request body safely.

### TC-API-008: Register with extra unexpected field

- Test Case ID: TC-API-008

- Type: Edge

- Endpoint: `/register`

- Method: POST

- Request Body:

```json

{

  "email": "[newuser@example.com](mailto:newuser@example.com)",

  "password": "Password123",

  "role": "admin"

}

```

- Expected Status Code: 201

- Expected Response:

```json

{

  "message": "Account created successfully"

}

```

- Priority: High

- Severity: Critical

- Notes: API must not allow privilege assignment through unexpected request body fields.

## 7. Security Checks

- API should not return the user's password in the response.

- API should not store or expose plain text passwords.

- API should not allow users to assign privileged roles through request body fields.

- API should not expose internal server errors or stack traces.

- API should validate all required fields before account creation.

- API should handle duplicate registration attempts safely.

- API should use HTTPS in real environments.

- API should apply rate limiting or abuse protection according to product requirements.

## 8. Clarifying Questions

- What exact response body should be returned after successful registration?

- Should successful registration return `201 Created` or `200 OK?

- Should duplicate email return `409 Conflict`, `400 Bad Request`, or another status code?

- What password rules should be enforced?

- Should email verification be required after registration?

- Should the user be automatically logged in after registration?

- Should the API return an authentication token after registration?

- Should unexpected fields be ignored or rejected?

- Are rate limits required for repeated registration attempts?
# Login Test Cases

## User Story

```text
As a user, I want to log in with my email and password so that I can access my account.
```

## Prompt Used

Prompt v4 - Advanced QA Test Case Format

## AI Output

## 1. Requirement Summary

The user should be able to log in using a valid email and password in order to access their account.

## 2. Assumptions

- The user already has a registered account.
- The user is on the login page.
- Email and password fields are available.
- A login button is available.
- The system validates credentials before giving account access.

## 3. Test Scenarios

- User logs in with valid credentials.
- User tries to log in with an incorrect password.
- User tries to log in with an unregistered email.
- User tries to log in with empty fields.
- User tries to log in with an invalid email format.
- User tries to access the account after successful login.

## 4. Test Cases

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |
|---|---|---|---|---|---|---|---|---|---|
| TC-001 | Positive | Functional | Log in with valid credentials | User has a registered account and is on the login page | 1. Enter valid email<br>2. Enter valid password<br>3. Click Login | User is logged in successfully and redirected to the account page | High | Critical | Ready |
| TC-002 | Negative | Functional | Log in with incorrect password | User has a registered account and is on the login page | 1. Enter valid email<br>2. Enter incorrect password<br>3. Click Login | User is not logged in and sees a clear error message | High | Major | Ready |
| TC-003 | Negative | Functional | Log in with unregistered email | User is on the login page | 1. Enter unregistered email<br>2. Enter any password<br>3. Click Login | User is not logged in and sees a clear error message | Medium | Major | Ready |
| TC-004 | Negative | Validation | Submit login form with empty fields | User is on the login page | 1. Leave email field empty<br>2. Leave password field empty<br>3. Click Login | User sees validation messages for required fields | High | Major | Ready |
| TC-005 | Negative | Validation | Submit invalid email format | User is on the login page | 1. Enter invalid email format<br>2. Enter password<br>3. Click Login | User sees an email format validation message | Medium | Minor | Ready |
| TC-006 | Edge | Security | Attempt repeated failed logins | User is on the login page | 1. Enter valid email<br>2. Enter incorrect password multiple times<br>3. Observe system behavior | System handles repeated failed attempts according to security rules | High | Major | Draft |

## 5. Edge Cases

- User enters email with leading or trailing spaces.
- User enters password with special characters.
- User tries to log in multiple times with wrong credentials.
- User refreshes the page during login.
- User tries to log in while already logged in.
- User has a locked or disabled account.

## 6. Clarifying Questions

- Should users be locked out after multiple failed login attempts?
- Should login support two-factor authentication?
- Should error messages be generic or specific?
- Should login remember the user session?
- What page should the user be redirected to after successful login?

# Login Examples

## Example 1: Login User Story

### Input

As a user, I want to log in with my email and password so that I can access my account.

### AI Output

## Test Scenarios

1. User logs in with valid email and valid password.
2. User tries to log in with invalid email.
3. User tries to log in with invalid password.
4. User tries to log in with empty email field.
5. User tries to log in with empty password field.
6. User tries to log in with both fields empty.
7. User tries to log in with incorrectly formatted email.
8. User tries to log in with leading/trailing spaces in email or password.
9. User tries to log in with a locked, disabled, or unverified account.
10. User uses the login form on different devices and browsers.

---

## Positive Test Cases

### TC-001: Login with valid credentials

**Preconditions:**

- User has an existing active account.
- User is on the login page.

**Steps:**

1. Enter a valid email address.
2. Enter the correct password.
3. Click the login button.

**Expected Result:**

- User is successfully logged in.
- User is redirected to their account/dashboard page.

**Priority:** High

---

### TC-002: Login after trimming spaces in email

**Preconditions:**

- User has an existing active account.
- User is on the login page.

**Steps:**

1. Enter a valid email address with spaces before or after it.
2. Enter the correct password.
3. Click the login button.

**Expected Result:**

- System handles extra spaces correctly.
- User is successfully logged in.

**Priority:** Medium

---

## Negative Test Cases

### TC-003: Login with invalid email

**Preconditions:**

- User is on the login page.

**Steps:**

1. Enter an email address that is not registered.
2. Enter any password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows an error message.

**Priority:** High

---

### TC-004: Login with invalid password

**Preconditions:**

- User has an existing active account.
- User is on the login page.

**Steps:**

1. Enter a valid registered email.
2. Enter an incorrect password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows an error message.

**Priority:** High

---

### TC-005: Login with empty email field

**Preconditions:**

- User is on the login page.

**Steps:**

1. Leave the email field empty.
2. Enter a password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows a validation message for the email field.

**Priority:** High

---

### TC-006: Login with empty password field

**Preconditions:**

- User is on the login page.

**Steps:**

1. Enter a valid email.
2. Leave the password field empty.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows a validation message for the password field.

**Priority:** High

---

### TC-007: Login with invalid email format

**Preconditions:**

- User is on the login page.

**Steps:**

1. Enter an invalid email format, such as `userexample.com`.
2. Enter any password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows an email format validation message.

**Priority:** Medium

---

## Edge Cases

1. Email contains uppercase letters.
2. Email contains leading or trailing spaces.
3. Password contains special characters.
4. Password is very long.
5. User clicks the login button multiple times quickly.
6. User tries to log in while internet connection is unstable.
7. User tries to log in from a mobile browser.
8. User account exists but is locked.
9. User account exists but email is not verified.
10. Login session expires after successful login.

---

## Clarifying Questions

1. Should login require email verification before access?
2. What error message should be shown for invalid credentials?
3. Should the system say whether the email or password is incorrect, or show a generic error?
4. Is there a limit on failed login attempts?
5. Should the account be locked after several failed attempts?
6. Should users be able to log in with username or only email?
7. Should "Remember me" be available?
8. Should password visibility toggle be available?
9. Should two-factor authentication be supported?
10. What page should the user see after successful login?

---

## Example 2: Improved Login User Story Prompt

### Input

As a user, I want to log in with my email and password so that I can access my account.

### AI Output

## 1. Requirement Summary

The user wants to log in using an email and password in order to access their account.

The core requirement is authentication through email and password.

---

## 2. Assumptions

1. The user already has a registered account.
2. The login page contains an email field, password field, and login button.
3. The system validates required fields before submitting the login request.
4. The system checks whether the entered credentials match an existing account.
5. After successful login, the user is redirected to an authenticated area, such as an account page or dashboard.
6. The exact error messages are not defined in the user story.

---

## 3. Test Scenarios

1. Verify that a registered user can log in with valid email and valid password.
2. Verify that login fails when the email field is empty.
3. Verify that login fails when the password field is empty.
4. Verify that login fails when both email and password fields are empty.
5. Verify that login fails when the email format is invalid.
6. Verify that login fails when the email is valid but not registered.
7. Verify that login fails when the password is incorrect.
8. Verify that the user is redirected after successful login.
9. Verify that clear validation or error messages are shown when login fails.
10. Verify that the password is not displayed as plain text while typing.

---

## 4. Positive Test Cases

### TC-001: Login with valid email and valid password

**Preconditions:**

- User has an existing registered account.
- User is on the login page.

**Test Steps:**

1. Enter a valid registered email address.
2. Enter the correct password.
3. Click the login button.

**Expected Result:**

- User is successfully logged in.
- User is redirected to the authenticated account area.

**Priority:** High

---

### TC-002: Password field masks entered characters

**Preconditions:**

- User is on the login page.

**Test Steps:**

1. Click the password field.
2. Enter any password text.

**Expected Result:**

- Password characters are hidden or masked.
- Password is not displayed as plain readable text.

**Priority:** Medium

---

## 5. Negative Test Cases

### TC-003: Login with empty email field

**Preconditions:**

- User is on the login page.

**Test Steps:**

1. Leave the email field empty.
2. Enter a password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows a validation message for the email field.

**Priority:** High

---

### TC-004: Login with empty password field

**Preconditions:**

- User is on the login page.

**Test Steps:**

1. Enter a valid email address.
2. Leave the password field empty.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows a validation message for the password field.

**Priority:** High

---

### TC-005: Login with both fields empty

**Preconditions:**

- User is on the login page.

**Test Steps:**

1. Leave the email field empty.
2. Leave the password field empty.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows validation messages for required fields.

**Priority:** High

---

### TC-006: Login with invalid email format

**Preconditions:**

- User is on the login page.

**Test Steps:**

1. Enter an invalid email format, for example `userexample.com`.
2. Enter any password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows an email format validation message.

**Priority:** High

---

### TC-007: Login with unregistered email

**Preconditions:**

- User is on the login page.

**Test Steps:**

1. Enter an email address that is not registered in the system.
2. Enter any password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows an error message.

**Priority:** High

---

### TC-008: Login with incorrect password

**Preconditions:**

- User has an existing registered account.
- User is on the login page.

**Test Steps:**

1. Enter a valid registered email address.
2. Enter an incorrect password.
3. Click the login button.

**Expected Result:**

- User is not logged in.
- System shows an error message.

**Priority:** High

---

## 6. Edge Cases

1. Email contains uppercase letters.
2. Email contains leading or trailing spaces.
3. Password contains leading or trailing spaces.
4. Password contains special characters.
5. Password contains numbers only.
6. Password contains letters only.
7. Password is very long.
8. User clicks the login button multiple times quickly.
9. User presses Enter instead of clicking the login button.
10. User refreshes the page after failed login.
11. User refreshes the page after successful login.
12. User tries to log in with a slow or unstable internet connection.

---

## 7. Clarifying Questions

1. What should happen after successful login?
2. What exact error message should be shown for invalid credentials?
3. Should the system show a generic error message or specify whether the email/password is wrong?
4. Is email case-sensitive or case-insensitive?
5. Should leading/trailing spaces be automatically trimmed?
6. Is there a limit on failed login attempts?
7. Should the account be temporarily locked after too many failed attempts?
8. Should users be able to log in only with email, or also with username/phone?
9. Is two-factor authentication required?
10. Should there be a "Remember me" option?
11. Should there be a "Forgot password?" link?
12. What password rules exist for the account?

---

## Example 3: Login User Story With Test Case Table

### Input

As a user, I want to log in with my email and password so that I can access my account.

### AI Output

## 1. Requirement Summary

The user wants to log in using an email and password so they can access their account.

The main requirement is email/password authentication for an existing user.

---

## 2. Assumptions

1. The user already has a registered account.

2. The login page includes an email field, password field, and login button.

3. Email and password are required fields.

4. The system validates email format.

5. The system checks whether the entered credentials are correct.

6. The destination after successful login is not specified.

---

## 3. Test Scenarios

1. Verify successful login with valid email and valid password.

2. Verify login fails when the email field is empty.

3. Verify login fails when the password field is empty.

4. Verify login fails when both fields are empty.

5. Verify login fails with invalid email format.

6. Verify login fails with unregistered email.

7. Verify login fails with incorrect password.

8. Verify password input is masked.

9. Verify login behavior when user clicks login multiple times.

10. Verify login behavior with leading/trailing spaces in email.

---

## 4. Test Cases

| Test Case ID | Type | Title | Preconditions | Steps | Expected Result | Priority | Severity |

|---|---|---|---|---|---|---|---|

| TC-001 | Positive | Login with valid credentials | User has an active registered account and is on the login page | 1. Enter valid registered email<br>2. Enter correct password<br>3. Click Login | User is logged in and redirected to the account area | High | Critical |

| TC-002 | Negative | Login with empty email | User is on the login page | 1. Leave email empty<br>2. Enter password<br>3. Click Login | User is not logged in; email required validation is shown | High | Major |

| TC-003 | Negative | Login with empty password | User is on the login page | 1. Enter valid email<br>2. Leave password empty<br>3. Click Login | User is not logged in; password required validation is shown | High | Major |

| TC-004 | Negative | Login with both fields empty | User is on the login page | 1. Leave email empty<br>2. Leave password empty<br>3. Click Login | User is not logged in; required field validations are shown | High | Major |

| TC-005 | Negative | Login with invalid email format | User is on the login page | 1. Enter `userexample.com`<br>2. Enter password<br>3. Click Login | User is not logged in; email format validation is shown | High | Major |

| TC-006 | Negative | Login with unregistered email | User is on the login page | 1. Enter unregistered email<br>2. Enter any password<br>3. Click Login | User is not logged in; error message is shown | High | Major |

| TC-007 | Negative | Login with incorrect password | User has a registered account and is on the login page | 1. Enter registered email<br>2. Enter incorrect password<br>3. Click Login | User is not logged in; error message is shown | High | Major |

| TC-008 | Edge | Email with uppercase letters | User has a registered account and is on the login page | 1. Enter registered email using uppercase letters<br>2. Enter correct password<br>3. Click Login | System handles email case according to product rules | Medium | Minor |

| TC-009 | Edge | Email with leading or trailing spaces | User has a registered account and is on the login page | 1. Enter registered email with spaces before/after it<br>2. Enter correct password<br>3. Click Login | System handles spaces according to product rules | Medium | Minor |

| TC-010 | Edge | Multiple rapid login clicks | User is on the login page | 1. Enter valid credentials<br>2. Click Login multiple times quickly | System processes login once and does not create duplicate requests or errors | Medium | Major |

| TC-011 | Positive | Password field masks input | User is on the login page | 1. Click password field<br>2. Type password | Password is hidden or masked while typing | Medium | Minor |

---

## 5. Edge Cases

1. Email contains uppercase letters.

2. Email contains leading or trailing spaces.

3. Password contains leading or trailing spaces.

4. Password contains special characters.

5. Password is very long.

6. User clicks the login button multiple times quickly.

7. User presses Enter instead of clicking the login button.

8. User refreshes the page after failed login.

9. User tries to log in with unstable internet connection.

10. User logs in from mobile browser.

---

## 6. Clarifying Questions

1. What page should the user be redirected to after successful login?

2. What exact error message should appear for invalid credentials?

3. Should the error message be generic or specify whether email/password is wrong?

4. Should email addresses be case-sensitive or case-insensitive?

5. Should leading/trailing spaces in email be trimmed automatically?

6. Is there a limit on failed login attempts?

7. Should the account lock after multiple failed attempts?

8. Is two-factor authentication required?

9. Should there be a "Remember me" option?

10. Should there be a "Forgot password?" link?

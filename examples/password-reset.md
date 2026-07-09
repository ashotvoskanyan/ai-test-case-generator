# Password Reset Example

## Input

As a user, I want to reset my password using my email so that I can regain access to my account.

## AI Output

## 1. Requirement Summary

The user wants to reset their password using their email in order to regain access to their account.

The core requirement is password recovery through an email-based reset flow.

---

## 2. Assumptions

1. The user has an existing account registered with an email address.

2. The password reset page contains an email input field and a submit button.

3. The system validates that the email field is not empty.

4. The system validates the email format.

5. The system sends password reset instructions or a reset link to the provided email address.

6. The exact email content, reset link expiration time, and security rules are not defined in the user story.

7. The user story does not specify whether the system should reveal if an email is registered.

---

## 3. Test Scenarios

1. Verify that a user can request a password reset with a valid registered email.

2. Verify that password reset request fails when the email field is empty.

3. Verify that password reset request fails when the email format is invalid.

4. Verify behavior when the user enters an unregistered email.

5. Verify that the system shows a clear confirmation or error message after submission.

6. Verify that the password reset email is sent for a registered email.

7. Verify that the password reset flow handles uppercase email input.

8. Verify that the password reset flow handles leading/trailing spaces in the email field.

9. Verify that repeated password reset requests are handled safely.

10. Verify that the user can access the password reset page from the login page, if such link exists.

---

## 4. Positive Test Cases

### TC-001: Request password reset with valid registered email

**Preconditions:**

- User has an existing registered account.

- User is on the password reset page.

**Test Steps:**

1. Enter a valid registered email address.

2. Click the submit/reset button.

**Expected Result:**

- System accepts the request.

- User sees a confirmation message.

- Password reset instructions or a reset link are sent to the email address.

**Priority:** High

---

### TC-002: Submit password reset request with uppercase email letters

**Preconditions:**

- User has an existing registered account.

- User is on the password reset page.

**Test Steps:**

1. Enter the registered email address using uppercase letters.

2. Click the submit/reset button.

**Expected Result:**

- System handles email case according to product rules.

- Password reset request is processed if email matching is case-insensitive.

**Priority:** Medium

---

## 5. Negative Test Cases

### TC-003: Submit password reset request with empty email field

**Preconditions:**

- User is on the password reset page.

**Test Steps:**

1. Leave the email field empty.

2. Click the submit/reset button.

**Expected Result:**

- Password reset request is not submitted.

- System shows a validation message for the email field.

**Priority:** High

---

### TC-004: Submit password reset request with invalid email format

**Preconditions:**

- User is on the password reset page.

**Test Steps:**

1. Enter an invalid email format, for example `userexample.com`.

2. Click the submit/reset button.

**Expected Result:**

- Password reset request is not submitted.

- System shows an email format validation message.

**Priority:** High

---

### TC-005: Submit password reset request with unregistered email

**Preconditions:**

- User is on the password reset page.

- Email address is not registered in the system.

**Test Steps:**

1. Enter an unregistered email address.

2. Click the submit/reset button.

**Expected Result:**

- System handles the request according to product/security rules.

- System does not expose sensitive account information unless the product explicitly allows it.

**Priority:** High

---

## 6. Edge Cases

1. Email contains uppercase letters.

2. Email contains leading or trailing spaces.

3. Email contains plus addressing, for example `user+test@example.com`.

4. Email field contains a very long email address.

5. User clicks the submit/reset button multiple times quickly.

6. User submits the form with unstable internet connection.

7. User refreshes the page after submitting the reset request.

8. User requests password reset multiple times in a short period.

9. User enters an email with special but valid characters.

10. User tries to use an expired password reset link.

11. User tries to use the same password reset link more than once.

12. User opens the reset link on a different device or browser.

---

## 7. Clarifying Questions

1. Should the system show the same message for registered and unregistered emails?

2. What exact confirmation message should appear after submitting the reset request?

3. How long should the password reset link remain valid?

4. Can the same reset link be used more than once?

5. Should there be rate limiting for repeated password reset requests?

6. Should the user receive an email notification after changing the password?

7. Should the user be logged in automatically after resetting the password?

8. What password rules should apply when creating the new password?

9. Should users confirm the new password in a second field?

10. Should password reset require additional verification, such as 2FA?

11. Should leading/trailing spaces in the email field be trimmed automatically?

12. Should email matching be case-sensitive or case-insensitive?
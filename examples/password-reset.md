# Password Reset Test Cases

## User Story

```text
As a user, I want to reset my password using my email so that I can regain access to my account.
```

## Prompt Used

Prompt v4 - Advanced QA Test Case Format

## AI Output

## 1. Requirement Summary

The user should be able to request a password reset using their email address and create a new password in order to regain access to their account.

## 2. Assumptions

- The user has an existing account.
- The password reset flow starts from a "Forgot Password" option.
- The user enters an email address to request a reset.
- If the email is valid and registered, the system sends password reset instructions.
- The reset process uses a reset link or token.
- The system validates the new password before saving it.

## 3. Test Scenarios

- User requests a password reset with a registered email.
- User tries to request a password reset with an unregistered email.
- User submits the password reset form with an invalid email format.
- User submits the password reset form with an empty email field.
- User opens a valid password reset link and creates a new password.
- User tries to use an expired or invalid reset link.
- User tries to set a weak or invalid new password.
- User logs in successfully after resetting the password.

## 4. Test Cases

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |
|---|---|---|---|---|---|---|---|---|---|
| TC-001 | Positive | Functional | Request password reset with registered email | User has an existing account and is on the password reset page | 1. Enter registered email address<br>2. Submit password reset request | System accepts the request and sends password reset instructions according to product rules | High | Major | Ready |
| TC-002 | Negative | Functional | Request password reset with unregistered email | User is on the password reset page | 1. Enter unregistered email address<br>2. Submit password reset request | System handles the request safely and does not reveal unnecessary account information | High | Major | Draft |
| TC-003 | Negative | Validation | Submit password reset request with invalid email format | User is on the password reset page | 1. Enter invalid email format<br>2. Submit password reset request | User sees an email format validation message | Medium | Minor | Ready |
| TC-004 | Negative | Validation | Submit password reset request with empty email field | User is on the password reset page | 1. Leave email field empty<br>2. Submit password reset request | User sees a required field validation message | Medium | Minor | Ready |
| TC-005 | Positive | Functional | Reset password using valid reset link | User has requested password reset and has a valid reset link or token | 1. Open valid reset link<br>2. Enter new valid password<br>3. Confirm new password if required<br>4. Submit new password | Password is updated successfully and user can proceed according to product rules | High | Critical | Ready |
| TC-006 | Negative | Security | Use expired or invalid reset link | User has an expired or invalid reset link or token | 1. Open expired or invalid reset link<br>2. Attempt to continue password reset | System rejects the link and shows a clear error message without resetting the password | High | Major | Ready |
| TC-007 | Negative | Validation | Set weak or invalid new password | User has opened a valid reset link | 1. Enter weak or invalid new password<br>2. Submit password reset form | System rejects the password and shows password validation requirements | Medium | Major | Draft |
| TC-008 | Positive | Functional | Log in after successful password reset | User has successfully reset password | 1. Go to login page<br>2. Enter email address<br>3. Enter new password<br>4. Click Login | User logs in successfully with the new password | High | Critical | Ready |

## 5. Edge Cases

- User requests password reset multiple times.
- User tries to use an old reset link after requesting a new one.
- User opens the reset link on a different device or browser.
- User refreshes the password reset page before submitting the new password.
- User enters a password with leading or trailing spaces.
- User enters mismatched password and confirm password values.
- Reset email is delayed or not received.
- User attempts to reuse the previous password.
- User tries to reset password for a locked or disabled account.

## 6. Clarifying Questions

- Should the system show the same message for registered and unregistered emails?
- How long should the reset link or token remain valid?
- Should old reset links become invalid after a new reset request?
- What password rules should be enforced?
- Should users be automatically logged in after resetting the password?
- Should the user receive a confirmation email after password reset?
- Should previous passwords be blocked?
- What should happen if the account is locked or disabled?

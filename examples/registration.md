# Registration Test Cases

## User Story

```text

As a new user, I want to create an account with my email and password so that I can use the application.

```

## Prompt Used

Prompt v4 - Advanced QA Test Case Format

## AI Output

## 1. Requirement Summary

A new user should be able to create an account by entering required registration information such as email and password.

## 2. Assumptions

- The user is on the registration page.

- Email and password fields are available.

- The system validates required fields.

- The system checks whether the email is already registered.

- The user is redirected or shown confirmation after successful registration.

## 3. Test Scenarios

- New user registers successfully with valid data.

- User tries to register with an already registered email.

- User tries to register with an invalid email format.

- User tries to register with empty required fields.

- User tries to register with a weak password.

- User confirms successful account creation.

## 4. Test Cases

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |

|---|---|---|---|---|---|---|---|---|---|

| TC-001 | Positive | Functional | Register with valid email and password | User is on the registration page and email is not already registered | 1. Enter valid email<br>2. Enter valid password<br>3. Submit registration form | Account is created successfully and user sees confirmation or is redirected | High | Critical | Ready |

| TC-002 | Negative | Functional | Register with already registered email | User is on the registration page and email already exists | 1. Enter already registered email<br>2. Enter valid password<br>3. Submit registration form | Account is not created and user sees a clear error message | High | Major | Ready |

| TC-003 | Negative | Validation | Register with invalid email format | User is on the registration page | 1. Enter invalid email format<br>2. Enter valid password<br>3. Submit registration form | User sees an email format validation message | Medium | Minor | Ready |

| TC-004 | Negative | Validation | Submit registration form with empty fields | User is on the registration page | 1. Leave email field empty<br>2. Leave password field empty<br>3. Submit registration form | User sees validation messages for required fields | High | Major | Ready |

| TC-005 | Negative | Validation | Register with weak password | User is on the registration page | 1. Enter valid email<br>2. Enter weak password<br>3. Submit registration form | User sees password validation message and account is not created | Medium | Major | Draft |

| TC-006 | Edge | Functional | Register with email containing leading or trailing spaces | User is on the registration page | 1. Enter email with leading or trailing spaces<br>2. Enter valid password<br>3. Submit registration form | System handles spaces according to product rules and does not create duplicate or invalid account | Medium | Minor | Draft |

## 5. Edge Cases

- Email contains uppercase letters.

- Email contains leading or trailing spaces.

- Password contains special characters.

- User refreshes the page during registration.

- User submits the registration form multiple times.

- Registration succeeds but confirmation email fails to send.

- Account is created but user is not redirected properly.

## 6. Clarifying Questions

- What password rules should be enforced?

- Should email verification be required?

- Should users be automatically logged in after registration?

- What message should appear if email is already registered?

- Should registration support social login?

- Should duplicate form submissions be blocked?
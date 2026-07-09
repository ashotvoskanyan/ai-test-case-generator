# Checkout Example

## Input

As a customer, I want to complete checkout with my saved payment method so that I can place my order quickly.

## Prompt Used

Prompt v4 - Advanced QA Test Case Format

## AI Output

## 1. Requirement Summary

The customer wants to complete checkout using a saved payment method so they can place an order quickly.

The core requirement is a faster checkout flow using an existing saved payment method.

---

## 2. Assumptions

1. The customer is logged in.

2. The customer has at least one item in the cart.

3. The customer has a saved payment method available.

4. The checkout page allows the customer to select or use the saved payment method.

5. The order is placed only after the customer confirms checkout.

6. Shipping address, taxes, discounts, and order confirmation behavior are not fully defined in the user story.

7. The user story does not specify whether the saved payment method can fail, expire, or require verification.

---

## 3. Test Scenarios

1. Verify that a logged-in customer can complete checkout with a valid saved payment method.

2. Verify that checkout cannot be completed if the cart is empty.

3. Verify checkout behavior when the saved payment method is expired.

4. Verify checkout behavior when the saved payment method is declined.

5. Verify that the order total is shown before placing the order.

6. Verify that the customer receives confirmation after successful checkout.

7. Verify that the customer cannot place duplicate orders by clicking the checkout button multiple times.

8. Verify that saved payment details are not fully exposed on the checkout page.

9. Verify checkout behavior when the customer has no saved payment method.

10. Verify checkout behavior with an unstable network connection.

---

## 4. Test Cases

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |

|---|---|---|---|---|---|---|---|---|---|

| TC-001 | Positive | Functional | Complete checkout with valid saved payment method | Customer is logged in, cart has items, saved payment method is valid | 1. Go to checkout<br>2. Select saved payment method<br>3. Review order<br>4. Place order | Order is placed successfully and confirmation is shown | High | Critical | Ready |

| TC-002 | Negative | Functional | Checkout with empty cart | Customer is logged in and cart is empty | 1. Go to cart or checkout | Customer cannot proceed to checkout with an empty cart | High | Major | Ready |

| TC-003 | Negative | Validation | Checkout without saved payment method | Customer is logged in, cart has items, no saved payment method exists | 1. Go to checkout<br>2. Try to place order | Customer is prompted to add a payment method before placing order | High | Major | Ready |

| TC-004 | Negative | Functional | Checkout with expired saved payment method | Customer has cart items and an expired saved payment method | 1. Go to checkout<br>2. Select expired saved payment method<br>3. Place order | Order is not placed and payment error is shown | High | Critical | Draft |

| TC-005 | Negative | Functional | Checkout with declined saved payment method | Customer has cart items and saved payment method is declined by payment processor | 1. Go to checkout<br>2. Select saved payment method<br>3. Place order | Order is not placed and customer sees payment failure message | High | Critical | Draft |

| TC-006 | Positive | UI | Display saved payment method safely | Customer is on checkout page with saved payment method | 1. View payment section | Saved payment method is displayed in masked format, not full card details | High | Major | Ready |

| TC-007 | Positive | UI | Display order summary before placing order | Customer has cart items and is on checkout page | 1. Review checkout page | Order summary, total price, and payment method are visible before order submission | High | Major | Ready |

| TC-008 | Edge | Functional | Multiple rapid clicks on place order button | Customer is on checkout page with valid saved payment method | 1. Click Place Order multiple times quickly | System creates only one order and prevents duplicate submissions | High | Critical | Draft |

| TC-009 | Edge | Functional | Network interruption during checkout | Customer is placing order with valid saved payment method | 1. Start checkout<br>2. Simulate network interruption during submission | System handles interruption safely and does not create unclear duplicate order state | Medium | Major | Draft |

| TC-010 | Negative | Security | Saved payment details exposure check | Customer is on checkout page | 1. View saved payment method details | Full payment details are not exposed to the customer or page UI | High | Critical | Ready |

| TC-011 | Edge | Functional | Checkout after cart item becomes unavailable | Customer has item in cart and saved payment method | 1. Go to checkout<br>2. Try to place order when item is no longer available | Order is not placed or customer is informed that cart must be updated | Medium | Major | Draft |

| TC-012 | Edge | Functional | Checkout after price changes | Customer has item in cart and saved payment method | 1. Go to checkout<br>2. Attempt checkout after item price changes | Customer is shown updated price before order is placed | Medium | Major | Draft |

---

## 5. Edge Cases

1. Customer clicks the place order button multiple times quickly.

2. Saved payment method is expired.

3. Saved payment method is declined.

4. Saved payment method was deleted in another session.

5. Cart item becomes unavailable during checkout.

6. Product price changes before order placement.

7. Shipping cost or tax changes before checkout completion.

8. Network connection drops during order submission.

9. Customer refreshes the page while order is being processed.

10. Customer uses checkout from a mobile browser.

11. Customer has multiple saved payment methods.

12. Customer’s session expires during checkout.

---

## 6. Clarifying Questions

1. Should checkout require the customer to be logged in?

2. What should happen if the saved payment method is expired?

3. What exact message should appear when payment fails?

4. Should the customer be allowed to choose between multiple saved payment methods?

5. Should the order be placed immediately after clicking the checkout button, or is there a final confirmation step?

6. What information must appear in the order summary?

7. Should taxes, shipping, and discounts be shown before placing the order?

8. How should the system prevent duplicate orders?

9. Should the customer receive an email confirmation after successful checkout?

10. What should happen if an item becomes unavailable during checkout?

11. Should saved payment details be masked?

12. Should additional verification be required for saved payment checkout?
# Checkout Test Cases

## User Story

```text

As a customer, I want to complete checkout with items in my cart so that I can place an order.

```

## Prompt Used

Prompt v4 - Advanced QA Test Case Format

## AI Output

## 1. Requirement Summary

The customer should be able to complete checkout with items in the cart and successfully place an order.

## 2. Assumptions

- The customer can access the website or application.

- The customer can add items to the cart.

- The customer has a valid payment method.

- The customer has a valid shipping address.

- The checkout flow includes cart review, shipping details, payment, and order confirmation.

## 3. Test Scenarios

- Customer completes checkout successfully.

- Customer tries to checkout with an empty cart.

- Customer tries to checkout with invalid payment details.

- Customer tries to checkout with missing shipping information.

- Customer reviews order details before placing the order.

- Customer receives an order confirmation after successful checkout.

## 4. Test Cases

| Test Case ID | Type | Test Level | Title | Preconditions | Steps | Expected Result | Priority | Severity | Status |

|---|---|---|---|---|---|---|---|---|---|

| TC-001 | Positive | Functional | Complete checkout successfully | Customer is logged in, cart has items, valid shipping address and payment method are available | 1. Go to cart page<br>2. Click checkout<br>3. Enter or select shipping address<br>4. Select valid payment method<br>5. Review order<br>6. Place order | Order is placed successfully and customer sees an order confirmation page | High | Critical | Ready |

| TC-002 | Negative | Functional | Attempt checkout with empty cart | Customer is logged in and cart is empty | 1. Go to cart page<br>2. Try to start checkout | Customer cannot proceed to checkout and sees a clear empty cart message | High | Major | Ready |

| TC-003 | Negative | Validation | Attempt checkout with missing shipping address | Customer is logged in and cart has items | 1. Go to checkout page<br>2. Leave shipping address empty<br>3. Try to continue checkout | Customer sees validation message and cannot continue until shipping address is provided | High | Major | Ready |

| TC-004 | Negative | Validation | Attempt checkout with invalid payment method | Customer is logged in and cart has items | 1. Go to checkout page<br>2. Enter invalid payment details<br>3. Try to place order | Payment is rejected and order is not placed | High | Critical | Ready |

| TC-005 | Edge | Functional | Item becomes unavailable during checkout | Customer has item in cart, but item becomes unavailable before order placement | 1. Go to checkout page<br>2. Review order<br>3. Try to place order after item becomes unavailable | Customer sees an item unavailable message and cannot place the order with unavailable item | Medium | Major | Draft |

| TC-006 | Positive | Usability | Review order before placing it | Customer is logged in and cart has items | 1. Go to checkout page<br>2. Review items, shipping address, payment method, and total price | Customer can clearly review all order details before placing the order | Medium | Minor | Ready |

## 5. Edge Cases

- Item price changes during checkout.

- Item goes out of stock during checkout.

- Payment provider is temporarily unavailable.

- Customer refreshes the page during payment.

- Customer uses an expired saved payment method.

- Customer tries to place the same order twice.

- Network connection drops after clicking Place Order.

## 6. Clarifying Questions

- Should guest checkout be supported?

- Which payment methods are available?

- Should the customer receive an email confirmation?

- What should happen if payment succeeds but order creation fails?

- What should happen if payment fails but order creation succeeds?

- Should taxes and shipping fees be calculated before final order placement?

- Can customers edit cart items during checkout?
# Checkout Payment Failure Bug Report

## Issue Description

```text
When I try to complete checkout with my saved payment method, the payment fails but the order still appears as placed.
```

## Prompt Used

Bug Report Prompt v1

## AI Output

## 1. Bug Title

Order appears as placed after saved payment method fails

## 2. Summary

When the user tries to complete checkout using a saved payment method, the payment fails, but the order still appears as placed. This creates an inconsistent checkout state where the order looks successful even though payment was not completed.

## 3. Environment

Not provided.

## 4. Preconditions

- User is logged in.
- User has items in the cart.
- User has a saved payment method.
- User is on the checkout page.

## 5. Steps to Reproduce

1. Log in as a customer.
2. Add one or more items to the cart.
3. Go to the checkout page.
4. Select the saved payment method.
5. Click the button to place the order.
6. Observe that the payment fails.
7. Check the order status or order confirmation state.

## 6. Actual Result

The payment fails, but the order still appears as placed.

## 7. Expected Result

If the payment fails, the order should not appear as successfully placed. The system should show a payment failure message and keep the order in a failed, pending, or unpaid state according to product rules.

## 8. Severity

Critical

## 9. Priority

High

## 10. Notes / Missing Information

- Exact payment failure message is not provided.
- Environment is not specified: production, staging, local, etc.
- Browser and device information are not provided.
- It is not clear whether the order is actually created in the backend or only shown as placed in the UI.
- It is not clear whether the customer receives an order confirmation email.
- It is not clear whether inventory is reserved after the failed payment.
- It is not clear whether the issue happens with all saved payment methods or only one payment method.
- Payment provider response details are not provided.
- No screenshot, video, console error, network log, or order ID is provided.

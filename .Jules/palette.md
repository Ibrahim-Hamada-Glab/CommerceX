## 2026-01-11 - Accessibility for Icon-only Buttons
**Learning:** The `product-details` page used icon-only buttons for quantity controls and wishlist actions without text alternatives, making them inaccessible to screen readers.
**Action:** Always verify that buttons with only icons (like `<i>`) have a corresponding `aria-label` and that the decorative icon is hidden with `aria-hidden="true"`.

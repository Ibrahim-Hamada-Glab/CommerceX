## 2026-01-12 - Icon-only buttons accessibility
**Learning:** Many interactive elements in the product details page (image navigation, quantity selectors, color options) were icon-only buttons lacking `aria-label`. This makes them inaccessible to screen readers.
**Action:** When creating icon-only buttons, always include `aria-label` describing the action, and use `aria-hidden="true"` on decorative icons inside them. Also, for slider dots or similar repeated elements, use dynamic labels like "View image X".

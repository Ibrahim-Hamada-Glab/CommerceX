## 2026-01-16 - Accessible Custom Sort Dropdown
**Learning:** Custom dropdowns are often "invisible" to screen reader users if implemented as mere clickable divs. The ARIA Combobox/Listbox pattern provides a robust way to make these accessible without compromising the custom visual design.
**Action:** When encountering custom "select" components, always implement the `role="combobox"` pattern with full keyboard support (Arrows/Enter/Escape) and `aria-activedescendant` or focus management.

## 2026-01-16 - Clickable Card Anti-Pattern
**Learning:** Wrapping a card in a click handler makes it inaccessible to keyboard users and confusing for screen readers.
**Action:** Always add `role="button"`, `tabindex="0"`, `aria-label`, and `keydown` handlers (Enter/Space) to clickable containers, and ensure nested interactive elements (like redundant buttons) are removed from the tab order (`tabindex="-1"`).

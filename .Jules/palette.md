## 2026-01-15 - Accessible Custom Sort Dropdown
**Learning:** Custom dropdowns (divs) need explicit ARIA roles (`combobox`, `listbox`, `option`) and keyboard handling to be accessible. Reusing existing CSS classes while changing structure requires checking for invalid nesting (e.g. `ul` inside `button`) and adjusting positioning contexts (wrapper with `position: relative`).
**Action:** When refactoring for accessibility, separate the trigger (button) from the popup (listbox) and wrap them to maintain layout while ensuring valid HTML and proper ARIA support.

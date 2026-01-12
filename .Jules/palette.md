## 2026-01-07 - Accessible Custom Dropdown
**Learning:** Custom `div`-based dropdowns are invisible to screen readers and keyboard users unless they implement the ARIA Combobox/Listbox pattern.
**Action:** When creating or fixing custom dropdowns:
1. Use `role="combobox"` on the trigger.
2. Use `role="listbox"` on the menu.
3. Use `role="option"` on items.
4. Implement `aria-expanded`, `aria-activedescendant` (or moving focus).
5. Ensure full keyboard support (Arrows, Enter, Escape).

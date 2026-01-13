## 2026-01-13 - Accessible Custom Dropdown
**Learning:** Custom dropdowns require full ARIA Combobox pattern (wrapper, trigger button, listbox) + manual focus management to match native select behavior. Simple divs with click handlers exclude keyboard and screen reader users.
**Action:** Always implement `role="combobox"`, `aria-expanded`, and `aria-activedescendant` (or focus management) when building custom selects.

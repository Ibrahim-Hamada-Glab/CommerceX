## 2026-01-08 - Accessible Custom Select
**Learning:** Custom dropdowns require a specific ARIA pattern (Combobox + Listbox) to be accessible. Simply using `div`s with click handlers excludes keyboard and screen reader users. The key is to manage focus (either visual or actual) and attributes like `aria-activedescendant` and `aria-selected` to convey state.
**Action:** When building custom select components, start with the ARIA Authoring Practices Guide "Select-Only Combobox" pattern. Ensure keyboard support (Arrows, Enter, Escape) matches native `<select>` behavior.

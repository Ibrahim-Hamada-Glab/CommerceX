## 2024-04-18 - Custom Dropdown Accessibility
**Learning:** Custom `div`-based dropdowns are common but often lack keyboard support and ARIA roles, making them invisible to screen readers.
**Action:** When encountering custom dropdowns, immediately check for `tabindex`, `role="button/listbox"`, `aria-expanded`, and keyboard handlers (`Enter`/`Space`). Ideally, advocate for using native `<select>` or a robust library component, but for "micro" fixes, retrofit with full ARIA and keyboard support.

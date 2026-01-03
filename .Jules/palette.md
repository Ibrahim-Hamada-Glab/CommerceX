## 2026-01-03 - Accessible Dropdown Refactor
**Learning:** Custom `div` dropdowns exclude keyboard/screen reader users. Native `<button>` triggers with `aria-expanded` and `role="listbox"` are critical for inclusion.
**Action:** Always use `<button>` for triggers and ensure `Enter`/`Space` keys work. Use ARIA attributes to communicate state to AT.

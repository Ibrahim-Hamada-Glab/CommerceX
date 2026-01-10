## 2026-01-10 - Icon-Only Buttons and Accessibility
**Learning:** Custom UI components like quantity selectors and image sliders often rely on visual cues (icons like +, -, <, >) which are invisible to screen readers. Adding `aria-label` is a critical, low-effort fix that significantly improves the experience for visually impaired users.
**Action:** Always inspect custom interactive elements for accessible names. Use `aria-label` when visible text is missing.

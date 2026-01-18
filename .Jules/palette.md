# Palette's Journal

## 2026-01-18 - Nested Interactive Elements in Angular
**Learning:** Nesting a `<button>` inside a clickable `<div>` (or another button-like element) is a common pattern in card designs but creates invalid HTML and accessibility issues. Screen readers may announce nested controls confusingly.
**Action:** Use CSS overlays (`::after` on the link) to make the whole card clickable while keeping the HTML structure flat, OR use a single button that covers the card, OR (as done here) treat the card as the button and style inner "buttons" as non-interactive spans.

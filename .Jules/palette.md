## 2024-05-22 - Accessibility in Carousel Navigation
**Learning:** Carousel navigation controls (prev/next/dots) are often overlooked but critical for screen reader users to understand context and control the experience. Using `aria-label` clearly describes the action, and `aria-current` on pagination dots provides necessary state information that visual cues (like color change) convey to sighted users.
**Action:** Always verify that interactive elements like carousels have explicit text alternatives or ARIA labels, and that state changes are communicated programmatically.

# Heikoop Bouw

Brand/content site in Dutch for homeowners and business clients considering building and carpentry. Primary journey: service → real project → contact.

## Direction
Architectural precision and approachable craftsmanship. Large condensed headings, authentic construction photography, red horizontal accents echoing the original logo. Clean white reading sections, charcoal hero, no generic stock architecture, invented reviews or business statistics.

## Tokens
Runtime owner: src/styles/global.css :root. Red #d2121f from original website CSS; charcoal #202020; white #ffffff; secondary surface #f3f3f1; muted #646464; borders #dededb. Barlow Condensed display headings and DM Sans text. Rectangular buttons and photographic surfaces. 1280px content maximum, 56px desktop / 24px mobile gutters.

## Interaction
Real anchors for pages; menu disclosure with Escape and focus return. Consistent contact CTA. Contact uses explicit email/WhatsApp draft handoff, never a fictional delivery confirmation. No analytics, advertising cookies, invented guarantees or unverified service territory.

## Evidence
Original logo, brand colour, project photos, biography and business details from https://www.heikoopbouw.nl/ and its /heikoop/, /projecten/, /contact/ pages. User analysis is editorial input, not independent business verification.

## Accessibility
Semantic headings and landmarks, keyboard focus, reduced motion, explicit image dimensions, responsive pages, meaningful local image descriptions and sufficient contrast. Mobile menu is a non-modal disclosure. Shared header/footer and tokens across every route.

## Enhancements
Project photos open in a native modal dialog with keyboard arrows, Escape and restored trigger focus. Original image links work without JavaScript. Project type uses a native radio group; only name, location and description are required for a draft. Email and timing are optional. No contact information persists. Mobile contact bar is omitted on contact pages and reserves space below content elsewhere. Shared customer questions contain no inferred service territory, response times or prices. Additional styling lives in src/styles/additions.css and inherits root tokens.

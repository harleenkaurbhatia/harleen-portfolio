# Minimal redesign (replaces the Netflix theme)

**Why:** the Netflix "series" theme wasn't landing with recruiters. Goal is a professional, fast-to-scan site.

**Approaches considered:** (A) Sourav Mahapatra-style layout in the existing Next.js app, (B) A plus a pixel-art hero illustration, (C) rebuild in Framer. Picked A: no illustration that could look childish or AI-made, and keeps Vercel/analytics/domain.

**Decisions**
- White background, near-black ink, one accent (Klein blue #002FA7). Instrument Sans + Geist Mono labels.
- Pixels only as tiny details: 8x8 "H" mark, square label bullets, faint grid behind card images. No characters.
- Every nav item is its own page: /work, /work/[slug], /experience, /experience/[slug], /writing, /writing/[slug], /about (bio + education), /resume (embedded PDF), /contact (LinkedIn, GitHub, resume).
- Content kept from the old site; Modul title shortened to "Co-founder"; IIT Bombay removed from "Worked with".
- Real screenshots where they exist (Curio screenshots folder, Sahayak demo video frame); others show a title on the grid.
- Old /show, /blog, /projects, /education, /browse URLs 308-redirect to the new pages.

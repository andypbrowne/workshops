# workshops.andypbrowne.com — build plan

Drop this file into a new Cursor project (suggested local path: `~/Developer/workshops`) and use **First prompt** below as the opening message.

This is a **super simple 1-pager**. Hosting matches `crayons.andypbrowne.com`. Visual family matches `andypbrowne.com`, not the Crayons app chrome.

---

## First prompt (paste into the new project)

Build a one-page static site for https://workshops.andypbrowne.com from `workshops-site-plan.md` in this repo. Follow that file as the spec. Do not add a blog, CMS, form backend, or extra pages. Eleventy + Netlify, same pattern as ~/Developer/crayons (build to `_site`, `netlify.toml`). Look and feel should feel like andypbrowne.com (Inter / Cedar / Newsreader, warm paper background) — not like the Crayons tool UI. Use the locked copy in the plan. When local `npm start` works, stop and tell me how to add the Netlify site and the `workshops` CNAME.

---

## Product

A public page Andy can text or nametag-share after Creative Mornings / Figma meetups.

**Offer:** a half-day, in-person decision workshop. The team leaves with a decision. Andy leaves a small kit so someone on the team can run the same meeting next time.

**Audience:** new clients only (design lead, studio founder, or nonprofit ED/program lead; ~8–40 people; one stuck decision; NY Metro or they have a space). Existing website clients are testimonials later — not shown as workshop case studies on v1.

**CTA:** LinkedIn (preferred channel for people Andy does not know). Secondary: link back to [andypbrowne.com](https://andypbrowne.com/). No contact form on v1.

---

## Locked copy

Use this wording. Do not invent “workshop / design thinking / DesignOps / facilitation” as the headline. Methods stay in the room unless linked quietly.

**Page title / og:title:** Decision workshops — Andy Garber-Browne

**Meta description:** A half-day, in-person session so a team can make one real decision — and a small kit so they can run it again without me.

**The sentence (hero):**
You leave with a decision today. Next time, someone on your team can run the same meeting without me.

**Supporting paragraph:**
I run a half-day, in-person session so a team can make one real decision — what to ship, what to cut, which direction to take — with the people who have to live with it in the room. You leave with a choice, owners, and next steps, not a wall of notes. I also leave a small kit (a host script and the cards we used) so someone on your team can run the same meeting next time without me.

**What happens**

| When | What | You get |
|------|------|---------|
| Before (~30 min) | Intake: one decision, who must live with it, what “done” looks like | A written decision question — not a vague alignment session |
| Half-day, in person | Generate options, vote with criteria, discuss, name next steps. Photograph the wall. | A choice, owners, and a date |
| Leave-behind | Host script, voting cards, criteria prompts, a photo of “good.” One named next host. | Your team can run it again. I am optional. |

**Good fit**
- One stuck decision (what to ship, what to cut, which direction)
- A design lead, founder, or ED who will be in the room
- A team of about 6–16, in the NY Metro area or in a space you already have
- Someone who will name a next host before we leave

**Not this**
- Open-ended team-building with no decision
- A deck, or Zoom across twelve time zones
- A retainer to run every meeting

**CTA label:** Message me on LinkedIn  
**CTA URL:** https://www.linkedin.com/in/ — look up Andy’s actual LinkedIn from andypbrowne.com/about and use that URL.

**Footer:** Andy Garber-Browne · NY Metro · [andypbrowne.com](https://andypbrowne.com/)

Optional quiet links (not the pitch): Energy Dots, Kickoff, Workshop facilitation — on andypbrowne.com/blog/.

Do **not** mention JPMorgan, DesignOps, or LEGO Serious Play on this page unless asked later. Do **not** invent testimonials. Do **not** publish a price on v1.

---

## Page outline (one URL: `/`)

1. Header: name + link to andypbrowne.com
2. Hero: sentence + supporting paragraph
3. What happens (three short blocks: before / in the room / kit)
4. Good fit / not this (two columns or two lists)
5. CTA
6. Footer

No nav beyond header/footer. No blog, tags, RSS, or 404 art project. A simple 404 is fine.

---

## Stack (copy crayons hosting, not crayons product)

Reference implementation: `~/Developer/crayons`

| Piece | Do this |
|-------|---------|
| Generator | Eleventy (same family as crayons + andypbrowne.com) |
| Build | `npm run build` → `_site` |
| Dev | `npm start` → `npx @11ty/eleventy --serve` |
| Host | **Netlify**, new site, connected to a new GitHub repo `andypbrowne/workshops` |
| Domain | Custom domain `workshops.andypbrowne.com` (same pattern as `crayons.andypbrowne.com`) |
| `netlify.toml` | `publish = "_site"`, `command = "npm run build"` |
| DNS | In the same DNS as andypbrowne.com: CNAME `workshops` → the Netlify site hostname (mirror whatever crayons uses) |

**Do not copy from crayons:** OG image Netlify function, Lighthouse plugin thresholds, blog posts, JS app, clipboard plugin, filter panels.

**Do copy the idea of:** static HTML, passthrough `public/` for CSS, `_data/metadata.js` with `url: "https://workshops.andypbrowne.com/"`, author pointing at andypbrowne.com/about.

Keep the repo tiny: one layout, one page, one CSS file. Markdown or Nunjucks for the homepage is fine.

---

## Design

Feel like **andypbrowne.com**, not Crayons.

- Fonts: Inter (body), Cedar (headings), Newsreader (optional italic/display) — reuse files from `~/Developer/andypbrowne/public/` if licensed/self-hosted there
- Background: warm paper (`#FFFAF6` / midnight text `#1B4167`)
- Long readable line length, generous vertical rhythm
- One obvious CTA (link button or text link with clear affordance)
- Mobile-first; this will be opened from a phone after an event
- Accessible: real headings, sufficient contrast, visible focus, no color-only meaning
- Favicon: simple; can reuse Andy’s mark if easy, otherwise a plain text “A”

No illustrations required for v1. No stock photos of sticky notes.

---

## Out of scope (v1)

- Booking calendar, Stripe, pricing
- Contact form / Netlify Forms
- Client logos or testimonials
- CMS
- Workshop kit PDF download (nice later)
- Subpages for each method
- Dark-mode app chrome

---

## Build order

1. Create `~/Developer/workshops`, `git init`, GitHub `andypbrowne/workshops` (private is fine)
2. Minimal Eleventy: `package.json`, `eleventy.config.js`, `_data/metadata.js`, `_includes/layouts/base.njk`, `content/index.md` or `.njk`, `public/css/index.css`
3. Implement the locked copy and outline
4. `npm start` — check phone width and contrast
5. Netlify: new site from the GitHub repo, build command and publish dir as above
6. Domain: add `workshops.andypbrowne.com` in Netlify; add CNAME next to the crayons record
7. HTTPS should provision automatically on Netlify

---

## Done when

- [ ] One page at `/` with the locked copy
- [ ] Local serve works
- [ ] https://workshops.andypbrowne.com loads over HTTPS
- [ ] LinkedIn CTA works
- [ ] Footer links to andypbrowne.com
- [ ] No extra pages or JS app

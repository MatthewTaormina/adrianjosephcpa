# Adrian Joseph CPA — Modern Multi-Page Prototype

A complete multi-page redesign prototype prepared for **Adrian Joseph CPA Professional Corporation** ([adrianjosephcpa.com](https://adrianjosephcpa.com/)).

This prototype directly addresses the major UX, SEO, and conversion shortcomings of the original single-page brochure website, demonstrating how the firm's elite credentials (CPA, STEP/TEP, Big Four background, Steam Whistle finance leadership) can be showcased through an authoritative digital presence.

---

## 🚀 Key Improvements & Before-and-After Analysis

| Element | Previous Site (`adrianjosephcpa.com`) | New Demonstration Prototype |
| :--- | :--- | :--- |
| **Information Architecture** | **1 single infinite scroll page** (`ID: 6, Slug: home`) with internal `#anchor` links. | **True Multi-Page Experience**: Dedicated landing pages for Taxation, Estate & Trust, Accounting & Advisory, Leadership, Insights, Tax Tools, and Contact. |
| **SEO & Discoverability** | Terrible organic search visibility. All services were grouped on one URL without dedicated metadata or keywords. | Each core practice area has its own search-optimized URL, metadata, and header hierarchy for local GTA queries (*Pickering Corporate Tax*, *Estate Freeze CPA*, *Family Business Succession*). |
| **Imagery & Relevance** | Random Unsplash landscape/travel photos (mountains, trees, generic snapshots) completely unrelated to a Canadian CPA practice. | Professional corporate styling highlighting **authentic portraits of Adrian Joseph & Tania Joseph**, the official **QuickBooks ProAdvisor** badge, and authentic tax data charts. |
| **Interactivity & Conversion** | Zero interactive tools. Contact Form 7 was commented out in HTML; only a plain `mailto:` link was available. | **Interactive Ontario CCPC Tax Deferral Estimator**, an **Interactive Client Assessment Stepper**, and validated consultation booking forms. |
| **Leadership & Credibility** | Stellar achievements (ranked 2nd worldwide in CIMA out of 5,798 students, STEP/TEP member, 4 AM work ethic) were buried in dense text blocks. | Prominent executive profiles with credential pills, verification links to CPA Ontario and STEP Canada, and clear trust badges. |
| **External Authority Links** | Zero external links. Visitors could not verify designations or learn about past corporate stewardship. | Direct verified links to **CPA Ontario**, **STEP Canada**, **Canadian Tax Foundation**, **Steam Whistle Brewing**, and **Ontario Tech University**. |
| **Knowledge Base & Articles** | 3 valuable tax articles (TOSI rules, passive investment grind, Ontario carbon tax) were commented out and orphaned in 2022. | Fully revitalized **Insights & Resource Center** with the preserved tax articles, figures, and an annual CRA tax filing deadline schedule. |

---

## 📁 Multi-Page Structure

```
├── index.html                           # Modern Homepage (Hero, Who We Serve, Trust Badges, Tax Teaser)
├── about.html                           # Leadership & About Us (Adrian Joseph, Tania Joseph, Verified Links)
├── contact.html                         # Contact & Office (1315 Pickering Parkway, Hours, Interactive Form)
├── insights.html                        # Insights & Tax Guides (Revitalized TOSI, SBD Grind, CRA Deadlines)
├── services/
│   ├── taxation.html                    # Corporate & Personal Taxation (CCPCs, Reorganizations, Rollovers)
│   ├── estate-and-trust.html            # Estate & Trust Planning (TEP Expertise, Wills, Clearance Certificates)
│   └── accounting-advisory.html         # Accounting & Advisory (Compilation Engagements, QuickBooks, Succession)
├── tools/
│   └── tax-calculator.html              # Interactive Ontario CCPC Tax Deferral Estimator & Client Assessment
├── assets/
│   ├── css/style.css                    # Responsive, accessible (AODA/WCAG AA compliant) stylesheet
│   ├── js/main.js                       # Interactive estimator, mobile navigation, and consultation handler
│   └── images/                          # Brand logos (SVG), authentic team portraits, and badges
└── downloaded_assets/                   # Archived backup of original WordPress pages, posts, and media
```

---

## 💻 How to Preview the Prototype

You can open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# From the project root:
python3 -m http.server 8080
```
Then visit: `http://localhost:8080`

---

## 🛠️ Hosting & CMS Feasibility

- **Current Host**: WordPress 6.9.11 on an Apache web server.
- **Modernization Path**:
  1. **Option A (Lightweight Static / Jamstack)**: Deploy these HTML/CSS/JS files directly to Apache/cPanel, Cloudflare Pages, Netlify, or Vercel for instantaneous load times (<0.5s) and zero security vulnerabilities.
  2. **Option B (WordPress Theme Conversion)**: Convert these multi-page templates into a clean, modern custom WordPress theme or block template to allow client editing through the existing WP admin dashboard.

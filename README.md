# PAPER & VOWS — Fine Art Wedding Stationery Atelier

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-4A1521?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **Project 10** of the **20-Day Digital Design Challenge**  
> *An independent multidisciplinary studio design for a luxury wedding stationery and printmaking atelier.*

---

## 1. Atelier Concept & Philosophy

**Paper & Vows** is an independent bespoke wedding stationery atelier established in 2018. Operating between an 18th-century stone mill workshop in Chipping Campden, Gloucestershire, and a private appointment salon on Berkeley Square, London, the studio exists as an intentional antidote to mass-market digital printing and disposable wedding marketing.

We craft heirloom suites printed on antique **1954 Heidelberg platen presses** using **100% pure mould-made cotton rag** (300 GSM to 800 GSM duplex board), plant-dyed habotai silk ribbons, and hand-poured botanical wax seals. Every piece is treated as an enduring relic that families preserve in cedar boxes for decades.

---

## 2. Visual Identity & Design System

### Color Palette

| Token | Hex Value | Material Role |
|---|---|---|
| **Warm Ivory** | `#FBF9F5` | Primary canvas, mimics unbleached natural cotton pulp |
| **Warm Alabaster** | `#F3EFEA` | Secondary surface, tactile paper containers and cards |
| **Champagne Silk** | `#E5DDD0` | Soft dividers, organic edges, and muted ribbon tones |
| **Charcoal Umber** | `#2C2623` | Primary body typography and letterpress oil-pigment simulation |
| **Deep Burgundy** | `#4A1521` | Brand signature accent, custom wax seal monograms, primary CTAs |
| **Burnished Gold** | `#8C7355` | Micro-etched metallic foil leaf highlights and insignia borders |
| **Florentine Olive** | `#60695C` | Botanical suite accent, herbarium illustrations, and garden wax seals |

### Typography System

- **Display & Headline Serif:** *Cormorant Garamond* & *Playfair Display*  
  Disciplined high-contrast serif set at monumental scale (5–6vw) with restrained line measures (maximum 2 lines at desktop).
- **Architectural Grotesque:** *Plus Jakarta Sans*  
  Clean, contemporary sans-serif engineered for optimal readability. Running text is strictly set at `16px` (`text-base`) with high-contrast ratios exceeding `5:1`.
- **Artisanal Script:** *Alex Brush*  
  Delicate calligraphic flourishes reserved for personal monogram crests and suite signatures.

---

## 3. Four Core Pages Architecture

1. **The Studio (`/` — Home):**
   - Editorial hero with photographic flat-lay of the *Cotswold Heirloom* suite.
   - Studio accreditations: *600 GSM Cotton Rag*, *1954 Heidelberg Press*, *300-Year Archival Longevity*.
   - **The Anatomy of an Heirloom Suite:** Interactive photographic stage allowing couples to select pins across the suite to deconstruct the craft behind the Main Invitation, RSVP Card, Details Card, Botanical Silk Ribbon, and Wax Seal.
   - Narrative craft essay on why cotton paper outlasts wood pulp cardstock.
   - Signature collection previews, Heidelberg press manifesto, and letters from real celebrations.

2. **The Print Archives (`/collections` — Collections):**
   - Aesthetic filter system (*All*, *Classical & Deckle*, *Modern Minimalist*, *Botanical & Herbarium*, *Velvet & Imperial Foil*, *British Heirloom*, *Mediterranean Arches*).
   - Six complete original collections:
     1. **The Florentine:** 500gsm Fabriano deckle rag with Renaissance blind debossed filigree and charcoal letterpress.
     2. **Sorella Minimalist:** 800gsm duplex architectural board with matte espresso foil and vellum overlays.
     3. **Botanique Provence:** 600gsm cotton with wildflower relief, sage botanical ink, and madder-dyed silk.
     4. **Velvet & Vow:** Somerset velvet cotton with 24k gold beveled edges and deep burgundy wax crest.
     5. **Cotswold Heirloom:** 100% British cotton rag pressed on 1954 Heidelberg platen with sepia umber ink.
     6. **Soleil Terracotta:** Die-cut architectural arches with blind sunbeam relief and warm sand hues.
   - Quick Overview modal drawer with full suite stories and piece inventories.

3. **Suite Customizer (`/detail` — Collection Detail):**
   - Multi-angle photographic gallery with thumbnail switcher.
   - Full suite specifications (paper weight, press bite depth, calligraphy discipline, included items).
   - **Live Interactive Paper & Finish Customizer:**
     - Paper Stock selector (Somerset 600gsm, Fabriano 500gsm, Duplex 800gsm, Khadi 450gsm).
     - Print Technique selector (Letterpress, Pure Blind Deboss, Hot Foil Stamping, Duo Combo).
     - Metallic Foil & Ink Accent selector (Champagne Gold, Matte Espresso, Warm Copper, Soft Pewter).
     - Plant-Dyed Ribbon selector (Alabaster, Deep Burgundy, French Olive, Walnut Sand).
     - Hand-Poured Wax Seal selector (Custom Monogram, Olive Branch, Fleur-de-lis, Smooth Oval).
     - **Live Couple Personalization:** Type in couple names (e.g., *Eleanor & Julian*), and the card and monogram wax seal dynamically render custom initials in real time.
     - Real-time unit and total investment calculation based on quantity (50–200 suites).
     - One-click *Save Specification to Inquiry Form* workflow.

4. **Craft & Inquiries (`/studio` — Studio & Inquiries):**
   - The Chipping Campden Atelier story and Berkeley Square consultation salon.
   - 4-Step Bespoke Commission Process (*Consultation & Swatch Folio*, *Typographic Curation*, *Heidelberg Presswork*, *Archival Dispatch*).
   - Frequently Asked Questions accordion (lead times, cotton vs wood pulp, minimum order, international shipping).
   - **Comprehensive Commission Dossier (Inquiry Form):**
     - Full validation for couple names, email, celebration date, destination venue, and guest/suite quantities.
     - Multi-piece checklist (Main Card, RSVP, Details Card, Estate Map, Silk Ribbon, Wax Seal, Vow Books, Menus, Placecards).
     - Pre-populated selections from the customizer.
     - Bespoke submission receipt with unique reference number (`PV-XXXXXX`).

5. **Curated Sample Box Modal:**
   - Order the £35 tactile swatch box containing cotton paper samples (300gsm–800gsm), letterpress and hot foil impressions, silk ribbon cuttings, and wax seal specimens. The £35 fee is fully credited toward final bespoke orders.

---

## 4. Technical Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6 with `@tailwindcss/vite`
- **Styling:** Tailwind CSS v4 with custom font families, paper grain patterns, and letterpress shadow utilities
- **Icons:** Lucide React
- **Motion:** Restrained, quiet CSS cubic-bezier transitions with full `prefers-reduced-motion` compliance

---

## 5. Local Setup & Development

```bash
# Clone the repository
git clone https://github.com/raezxcv/paper-and-vows.git

# Enter the project directory
cd paper-and-vows

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Quality Assurance & Audits

- **Production Build:** Transforms 2,073 modules and bundles in **390ms** with zero errors.
- **Design Taste Inspection (`inspect.mjs`):**
  - Desktop (1440px): 2-line headline measure, zero arbitrary divider hairlines, zero generic icon grids.
  - Tablet (768px): Responsive navigation, no horizontal overflow (`0px`).
  - Mobile (390px): Clean 2-line headline, accessible touch targets, and fluid drawer navigation.
- **Accessibility:** Text contrast exceeds 5:1 for all primary and secondary elements; semantic HTML landmarks throughout; keyboard focus rings and ARIA labels implemented on all interactive controls.

---

## 7. License

Created by **Antigravity Creative Studio** as part of the *20-Day Digital Design Challenge*. All rights reserved.

# One Block Away - Technical Blueprint One-Pager Design

## Purpose
Cold outreach PDF that stands alone, grabs attention, and positions One Block Away as having already diagnosed the prospect's business.

## Key Requirements
- **Personalization**: Heavy - custom research per business
- **Offer**: Flexible - accommodates Implementation/Orchestration/Consulting
- **CTA**: Book a free consultation (calendar link)
- **Delivery**: Email attachment PDF (strong thumbnail preview)

## Design System
Based on Wireframe Catalyst from `design-systems.html`:
- Colors: Magenta `#FF71CE`, Cyan `#01CDFE`, Purple `#B967FF`
- Background: `#fafafa` with isometric 30° grid at 20% opacity
- Typography: Display 900 weight, Monospace for labels
- Borders: 2px solid wireframe style with corner accents

---

## Layout Specification (Letter size: 8.5" x 11")

### 1. HEADER ZONE (Top ~1.5")

```
┌────────────────────────────────────────────────────────────┐
│ SYSTEM ANALYSIS                           REPORT-2025-12-04│
│                                                            │
│                    [COMPANY NAME]                          │
│                    ═══════════════                         │
│                    (gradient underline)                    │
└────────────────────────────────────────────────────────────┘
```

**Styling:**
- Isometric grid pattern background at 20% opacity
- `SYSTEM ANALYSIS` - monospace, 9px, cyan (#01CDFE), uppercase, 0.15em letter-spacing
- `REPORT-[DATE]` - same styling, right-aligned
- Company name - display font, 48px, 900 weight, -0.03em tracking
- Gradient underline - 4px, linear-gradient(90deg, #FF71CE, #01CDFE, #B967FF)
- Bottom border - 2px solid #1a1a1a with corner accent (top-right)

---

### 2. DISCOVERY ZONE (~2.5")

```
┌────────────────────────────────────────────────────────────┐
│ SCAN-001: CURRENT STATE                                    │
├────────────────────────────────────────────────────────────┤
│ ┌─FINDING-001──────────┐  ┌─FINDING-002──────────┐        │
│ │ [Observation]        │  │ [Observation]        │        │
│ │ [Impact statement]   │  │ [Impact statement]   │        │
│ │ [Opportunity]        │  │ [Opportunity]        │        │
│ └──────────────────────┘  └──────────────────────┘        │
│                                                            │
│ ┌─FINDING-003──────────────────────────────────────┐      │
│ │ [Key observation about their business]            │      │
│ └───────────────────────────────────────────────────┘      │
└────────────────────────────────────────────────────────────┘
```

**Styling:**
- Section label - monospace, 10px, cyan, uppercase, 0.1em letter-spacing
- Cards - 2px border #1a1a1a, 8px/4px border-radius, white background
- Card labels (FINDING-001) - positioned top-left, 10px, monospace, #404040
- Card content - 14px body text, #404040
- Card shadows on hover: `8px 8px 0 rgba(1, 205, 254, 0.15)`

---

### 3. CATALYST ZONE (~2.5")

```
┌────────────────────────────────────────────────────────────┐
│ SOLUTION-002: PROPOSED TRANSFORMATION                      │
├────────────────────────────────────────────────────────────┤
│ ┌══════════════════════════════════════════════════════┐  │
│ ║  [OFFER TITLE]                                       ║  │
│ ║                                                      ║  │
│ ║  • [Deliverable 1]                                   ║  │
│ ║  • [Deliverable 2]                                   ║  │
│ ║  • [Deliverable 3]                                   ║  │
│ ║                                                      ║  │
│ └══════════════════════════════════════════════════════┘  │
└────────────────────────────────────────────────────────────┘
```

**Styling:**
- Primary card - dark background (#1a1a1a), gradient border (pink edge)
- Offer title - 24px, 700 weight, white text
- Deliverables - 14px, white text, custom bullet (small cyan square)
- Border-radius: 8px

**Offer Variants:**
- AI Implementation: "Custom AI System Build"
- AI Orchestration: "AI Workflow Integration"
- Strategic Consulting: "Transformation Strategy Session"

---

### 4. PROJECTION ZONE (~2")

```
┌────────────────────────────────────────────────────────────┐
│ FORECAST-003: TRANSFORMATION METRICS                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│ OPERATIONAL EFFICIENCY                              +40%   │
│ ████████████████████████████████░░░░░░░░░░                │
│                                                            │
│ TIME SAVINGS                                        +60%   │
│ ████████████████████████████████████████████░░░░░░        │
│                                                            │
│ CUSTOMER RESPONSE                                   +35%   │
│ ██████████████████████████████░░░░░░░░░░░░░░              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Styling:**
- Section label - same as other zones
- Metric labels - monospace, 11px, #404040
- Percentage - monospace, 11px, cyan (#01CDFE), right-aligned
- Progress bars - 24px height, 2px border #1a1a1a
- Fill - gradient (pink→cyan→purple), animated flow effect in digital view
- Diagonal stripe overlay on fill (45deg, rgba(255,255,255,0.2))

---

### 5. CTA ZONE (Bottom ~1.5")

```
┌────────────────────────────────────────────────────────────┐
│ ACTION-004: INITIATE                                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              ┌─────────────────────────────┐               │
│              │  BOOK YOUR STRATEGY SESSION │               │
│              └─────────────────────────────┘               │
│                                                            │
│  cal.com/oneblockaway              hello@oneblockaway.com  │
│                                                            │
│ ─────────────────────────────────────────────────────────  │
│ ONE BLOCK AWAY                    • APEX, NC  • RTP REGION │
└────────────────────────────────────────────────────────────┘
```

**Styling:**
- CTA button - gradient background (pink→cyan), #1a1a1a text, 16px 600 weight
- Button border-radius: 32px/8px asymmetric
- Contact info - monospace, 11px, #404040
- Footer line - 1px solid #e0e0e0
- Branding - "ONE BLOCK AWAY" in display type, 14px, 700 weight
- Location badges - same style as status badges, with pink dot indicator

---

## Template Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{COMPANY_NAME}}` | Prospect's company | "Apex Coffee Roasters" |
| `{{DATE}}` | Report date | "2025-12-04" |
| `{{FINDING_1}}` | First observation | "Website lacks AI chat integration" |
| `{{FINDING_1_IMPACT}}` | Impact of finding 1 | "Customers wait 24+ hrs for responses" |
| `{{FINDING_1_OPP}}` | Opportunity | "Instant 24/7 customer support" |
| `{{FINDING_2}}` | Second observation | "Manual inventory tracking" |
| `{{FINDING_2_IMPACT}}` | Impact | "Staff spends 5+ hrs/week on counts" |
| `{{FINDING_2_OPP}}` | Opportunity | "Automated stock alerts" |
| `{{FINDING_3}}` | Third observation | "No data on customer preferences" |
| `{{OFFER_TITLE}}` | Service being pitched | "Custom AI Implementation" |
| `{{DELIVERABLE_1}}` | First deliverable | "AI-powered customer chat system" |
| `{{DELIVERABLE_2}}` | Second deliverable | "Automated inventory management" |
| `{{DELIVERABLE_3}}` | Third deliverable | "Customer insights dashboard" |
| `{{METRIC_1_LABEL}}` | First metric name | "RESPONSE TIME" |
| `{{METRIC_1_VALUE}}` | First metric improvement | "+85%" |
| `{{METRIC_2_LABEL}}` | Second metric name | "STAFF HOURS SAVED" |
| `{{METRIC_2_VALUE}}` | Second metric improvement | "+5 hrs/week" |
| `{{METRIC_3_LABEL}}` | Third metric name | "CUSTOMER SATISFACTION" |
| `{{METRIC_3_VALUE}}` | Third metric improvement | "+40%" |
| `{{CALENDAR_LINK}}` | Booking URL | "cal.com/oneblockaway" |
| `{{EMAIL}}` | Contact email | "hello@oneblockaway.com" |

---

## Implementation Notes

### PDF Generation Approach
Use HTML/CSS template with Puppeteer or similar for PDF generation:
1. Create HTML template matching design specs
2. Use CSS from design-systems.html for consistent styling
3. Populate template variables from data object
4. Generate PDF at letter size (8.5" x 11")

### File Structure
```
/templates/
  one-pager-blueprint.html    # HTML template
  one-pager-blueprint.css     # Styles (can inline)
/scripts/
  generate-one-pager.js       # Generation script
```

### Color Reference
```css
--color-energy-primary: #FF71CE;   /* Pink/Magenta */
--color-energy-secondary: #01CDFE; /* Cyan */
--color-energy-accent: #B967FF;    /* Purple */
--color-wireframe: #1a1a1a;        /* Dark borders */
--color-wireframe-light: #404040;  /* Secondary text */
--color-surface: #ffffff;          /* Card backgrounds */
--color-base: #fafafa;             /* Page background */
```

---

## Success Criteria
- [ ] Company name visible in email thumbnail preview
- [ ] Research findings feel specific, not generic
- [ ] CTA is unmissable
- [ ] Design matches Wireframe Catalyst aesthetic
- [ ] Template variables are easy to populate
- [ ] PDF generates cleanly at letter size

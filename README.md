# MemQuest --- Interactive History Learning with WebXR

MemQuest is a mobile-first interactive history learning experience that
combines storytelling, camera-based discovery, 3D environments, and
WebXR.

The project explores a simple question:

**How might we make history feel less like something we memorize and
more like something we can explore?**

Instead of encountering history only through text, learners can scan
historical references, discover events and people, explore interactive
environments, investigate evidence, and test their understanding through
challenges.

The first fully developed learning unit explores the **American
Revolution**.

## Live Prototype

[Explore MemQuest]([https://memquest.vercel.app/])

## Key Experiences

### Scan & Discover

Use a phone camera to scan printed historical references. Browser-based
OCR connects recognized content to related events, timelines,
characters, and stories.

The current prototype recognizes:

-   Stamp Act --- 1765
-   Boston Massacre --- 1770
-   Boston Tea Party --- 1773
-   First Continental Congress --- 1774

### Meet Historical Figures

Discover figures such as **Samuel Adams** and **John Adams** through
animated 3D characters, profiles, narrated stories, and guided
questions.

### Explore Boston Harbor, 1773

Explore an interactive 3D environment and discover historical clues
including:

1.  A darkened lantern
2.  An East India Company tea chest
3.  The Dartmouth tea ship
4.  A ship carpenter's hatchet

Each clue reveals its story and why it matters.

Supported devices can use immersive VR. Mobile devices can use device
orientation, with drag controls available as a fallback.

### Timeline

Explore major events chronologically and see how they connect through
cause and effect.

### People & Evidence

Discover historical figures, relationships, historical evidence, and
different perspectives surrounding key events.

### Memory Check

Review chronology, historical perspectives, evidence, and
cause-and-effect relationships through a short interactive assessment.

### Challenges & Progress

Complete investigations, ordering challenges, perspective questions,
evidence reasoning, and memory checks while tracking learning progress.

## Experience Structure

``` text
MemQuest
├── Scan
│   └── Camera → OCR → Event → Character / Timeline
├── Library
│   └── American Revolution
│       ├── Explore
│       ├── Timeline
│       ├── People
│       ├── Evidence
│       └── Memory Check
├── Challenges
└── Progress
```

The American Revolution is currently the first complete unit. Ancient
China, Silk Road Civilizations, and World War II are represented as
future content areas.

## Technology

-   React 19 + Vite 6
-   Three.js + WebXR
-   Tesseract.js 7 for browser-based OCR
-   Locally hosted pre-generated narration
-   React state + versioned localStorage
-   Vercel deployment

The prototype does not require a production backend or runtime API keys.

## Run Locally

### Requirements

-   Node.js 24.x recommended
-   Windows PowerShell 5.1+ for the included project launcher
-   A camera-enabled browser for Scan features
-   HTTPS for camera, device-orientation, and WebXR testing on physical
    mobile devices

### Windows

From the project root:

``` powershell
.\scripts\project.ps1 install
.\scripts\project.ps1 dev
```

Then open:

`http://localhost:4173/`

### pnpm

If pnpm is already configured:

``` bash
pnpm install --frozen-lockfile
pnpm dev --host 0.0.0.0 --port 4173 --strictPort
```

## Test & Build

``` powershell
.\scripts\project.ps1 test
.\scripts\project.ps1 build
.\scripts\project.ps1 test:sites
```

Recommended viewport checks:

-   390 × 844 --- mobile portrait
-   844 × 390 --- mobile landscape
-   1254 × 960 --- desktop/tablet

Automated tests do not replace testing on real devices. Camera
permissions, OCR, audio, device orientation, touch interactions, and XR
behavior should also be verified on supported phones.

## Privacy

MemQuest currently has no user accounts, cloud database, leaderboard, or
cloud progress synchronization.

Learning progress is stored locally in the browser. Camera frames and
recognized OCR text are not persisted.

## Current Scope

MemQuest is an evolving prototype. Current limitations include:

-   OCR recognizes only configured printed English historical events.
-   The American Revolution is the only fully developed learning unit.
-   Character dialogue uses predefined questions and audio rather than
    real-time AI conversation.
-   Image anchoring uses configured reference images rather than
    arbitrary object recognition or persistent spatial anchors.
-   3D scenes and generated historical imagery are educational prototype
    interpretations, not exact historical reconstructions.
-   WebXR and device-orientation capabilities vary by browser and
    device.

## Design Direction

MemQuest brings together **history, storytelling, interaction design,
and immersive technology** to explore how historical learning can become
more active, visual, and memorable.

Future iterations can expand the experience to additional historical
periods, richer interactions, and new forms of spatial storytelling.

------------------------------------------------------------------------

**MemQuest**\
Interactive history learning through storytelling, exploration, and
immersive technology.

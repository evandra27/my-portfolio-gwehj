---
title: "Mystic Tower Clash - Competitive Strategy Board Game"
client: "BGA BINUS Competition"
year: '2025'
category: Product
excerpt: "A fantasy competitive tabletop strategy game featuring dynamic troop upgrades, resource economy management, and physical component UI design."
description: "End-to-end design and system analysis for a 2-4 player strategy board game. Built with balanced game logic, structured state transitions, card economy, and physical UI components."
image:
  src: /images/mystic-tower-mockup.png
  alt: Mystic Tower Clash Board Game Mockup
  width: 900
  height: 675
images:
  - /images/mystic-tower.png
  - /images/mystic-tower-team.png
services: ['Game Logic & System Analysis', 'Physical UI/UX Design', 'Resource Economy Balancing', 'Cost & Budget Analysis']
technologies: ['Figma', 'Canva', 'System Mechanics Design', 'Prototyping']
results:
  - value: '2-4 Players'
    label: 'Competitive turn-based strategy'
  - value: 'Rp 472k'
    label: 'Optimized production budget plan'
  - value: '3-Tier'
    label: 'Troop state & level upgrade progression'
featured: true
order: 5
---

## Project Overview

**Mystic Tower Clash** is an original competitive fantasy strategy board game designed for 2 to 4 players. Set in a tactical arena, players manage resource economies, deploy troops, purchase strategic cards, and assault opponent bases to conquer enemy towers.

The project highlights a balance between **System Logic (Rule Engineering)**, **In-Game Economy Balancing**, and **Physical UI/UX Design**, applying analytical problem-solving skills to tabletop mechanics.

![Mystic Tower Clash Physical Mockup](/images/mystic-tower-mockup.png)
*Figure 1.0: Physical product mockup of Mystic Tower Clash components and board setup.*

---

## Game System & Board Architecture

The game takes place on a 45x45 cm custom board featuring concentric movement tracks, merchant nodes, jungle zones, and a central dragon arena.

![Mystic Tower Clash Board Layout](/images/mystic-tower-board.png)
*Figure 2.0: Structural board architecture detailing movement paths, merchant tiles, and central boss area.*

### Core System Rules & State Transitions
* **Movement Engine:** Turn movement distance is dictated by probabilistic dice rolls, allowing tactical pathing toward objectives or combat nodes.
* **Troop Level Progression:** Unit states transition across 3 tiers (Level 1 Bronze, Level 2 Silver, Level 3 Gold). Players must spend coins strategically to upgrade unit power stats (e.g., Archer, Berserker, Sorcerer).
* **Deterministic & Conflict Resolution:** When troops meet on normal paths, combat power is compared directly. Ties trigger a dice-roll off, rewarding the victor with coins while eliminating the defeated troop.

---

## Physical UI/UX & Player Onboarding

To minimize cognitive load and eliminate the need for constant rulebook checking, key information is embedded directly into physical component dashboards.

![Mystic Tower Component Overview and Player Guide](/images/component.png)
![Mystic Tower Component Overview and Player Guide](/images/player-guide.png)
*Figure 3.0: Physical UI dashboards including Component Overview and Player's Guide cards.*

* **Information Hierarchy:** Quick-reference cards outline troop stats, level costs, and action outcomes at a glance.
* **Visual Color Coding:** Acrylic standees and tokens are color-coded across 4 player factions (Red, Blue, Green, Yellow) and 3 upgrade tiers (Bronze, Silver, Gold) for clear visual status tracking during gameplay.

---

## Game Economy & Event Logic

The game incorporates a dynamic resource loop where players earn 2 coins per turn and can reinvest capital into troop upgrades, market cards, or high-risk board events.

![Mystic Tower Card Mechanics and Event Logic](/images/normal-card.png)
![Mystic Tower Card Mechanics and Event Logic](/images/special-card.png)
![Mystic Tower Card Mechanics and Event Logic](/images/pandora-box.png)
*Figure 4.0: Special cards, Normal cards, and Pandora's Box probability matrix.*

### Mechanics & Event Systems
* **Action & Holding Cards:** Divided into instant-use cards and persistent keeping cards (e.g., Arcane Shield, Mass Theft, Resurrect) to allow strategic counterplay.
* **Probabilistic Event Engine (Pandora's Box):** Implements a dice-driven probability matrix yielding positive blessings, severe curses, or tactical wildcards to inject controlled unpredictability.

---

## Business Analysis & Production Budgeting

A comprehensive production feasibility study was conducted to ensure manufacturing efficiency without sacrificing component quality.

* **Total Production Cost:** IDR 472,000 per full prototype set.
* **Material Specifications:** A3 3mm Board (Game Board), 260 gsm Art Carton (Cards & Dashboards), and Custom Acrylic Tokens (Coins & Standees).
---
title: Hampiness - Mobile Hampers Marketplace & Management Platform
client: Academic Project
year: '2025'
category: Product
excerpt: End-to-end System Analysis, 3-Tier Architecture Design, and UI/UX Redesign for a multi-vendor mobile hampers e-commerce platform with multi-schedule delivery.
description: A comprehensive System Analysis and Design (ISAD) case study for Hampiness, featuring problem diagnosis (Fishbone), DFD/Use Case modeling, 3-Tier Client/Server specifications, and a modernized mobile UI/UX experience.
image:
  src: /images/hampiness-cover.png
  alt: Hampiness Mobile App Showcase
  width: 900
  height: 675
images:
  - /images/hampiness-cover.png
  - /images/hampiness-ui.png
services: ['System Analysis & Design', 'UI/UX Redesign', 'Database & API Architecture']
technologies: ['Figma', 'System Analysis (ISAD)', '3-Tier Architecture', 'DrawIO',]
results:
  - value: '3 Users'
    label: 'Roles Orchestrated (Customer, Vendor, Admin)'
  - value: 'Multi-Schedule'
    label: 'Custom delivery dates per item in single cart'
  - value: '3-Tier'
    label: 'Client/Server enterprise architecture design'
featured: true
order: 4
---

## Project Overview

**Hampiness** is a digital mobile platform designed to streamline the hampers-gifting experience for urban consumers while empowering micro-vendors to manage inventory, package creation, and order fulfillment independently. 

Despite growing market demand for personalized gifts, initial operational audits revealed significant friction: vendors struggled with inconsistent data entry and delayed order notifications, while customers faced non-real-time stock visibility, lack of delivery tracking, and inflexible delivery scheduling.

To resolve these systemic bottlenecks, I conducted a full **Systems Analysis and Design (ISAD)** pipeline—mapping root causes, restructuring Data Flow Diagrams (DFD), defining 3-Tier System Architecture, and redesigning the entire mobile interface for an intuitive end-to-end user experience[cite: 22, 24, 25, 58].

---

## Root Cause Analysis & Problem Diagnosis (Fishbone)

Using the **Fishbone (Ishikawa) Diagram** framework, operational inefficiencies were categorized across four core dimensions[cite: 24]:

![Hampiness Fishbone Diagram](/images/hampiness-fishbone.png)
*Figure 1.0: Fishbone diagram mapping operational bottlenecks across four core dimensions.*

* **People & Process:** Vendors frequently submitted incomplete product descriptions and mismatched image formats due to a lack of standardized onboarding guidelines. Admins had to perform tedious manual data verifications.
* **Technology:** Lack of automated input validation, non-real-time stock synchronization, and suboptimal order notification systems led to fulfillment delays.
* **Data:** Product specifications, pricing formats, and photo resolutions lacked standardization, overloading database storage and degrading catalog transparency for buyers.

---

## Core System Capabilities & User Roles

The system orchestrates workflows across three distinct actors:

### 1. Customer
* **Flexible Multi-Delivery Scheduling:** Ability to select different delivery dates and time slots for distinct hampers packages within a single checkout transaction.
* **Automated Order & Payment Gateway:** Integrated 1-hour payment window with automatic status updates (`Waiting for Payment` $\rightarrow$ `Payment Successful` / `Cancelled`).
* **History & Review System:** Post-fulfillment rating (1–5 stars), photo uploading, and feedback submission.

### 2. Vendor
* **Product & Package Management:** Independent CRUD operations for individual items and bundled hamper packages.
* **Fulfillment & Proof of Delivery:** Real-time order notification feed, schedule management, and mandatory photo proof submission for delivered orders.

### 3. Admin
* **Monthly Order Trend Analytics:** Visual reports identifying top-performing hampers, order spikes during festive seasons, and customer buying preferences.
* **Transaction Summary Reports:** Automated financial and volume recaps (daily/monthly averages) for operational policy adjustments.

---

## System Modeling & Architecture Breakdown

### Data Flow Diagram (DFD) & Use Case Hierarchy
The system process architecture decouples data ingestion, payment handling, and reporting engines:

![Hampiness Class Diagram](/images/hampiness-class-diagram.png)
*Figure 2.0: Structural Class Diagram detailing attributes and methods across system entities.*

* **Context Diagram:** Centralizes data flows between `Pelanggan`, `Vendor`, and `Admin` through the core Hampiness Information System.
* **Sub-Processes (1.0–8.0):** Standardizes Account Registration (1.0), Order Processing (2.0), Review Logging (3.0), Product/Package Management (4.0–5.0), Fulfillment (6.0), and Analytical Report Generation (7.0–8.0)[cite: 26, 27].

---

### 3-Tier Client/Server Infrastructure Specifications

To guarantee low latency, robust data isolation, and seamless scalability across iOS/Android clients, a **3-Tier Client/Server Architecture** was selected over traditional 2-Tier or Monolithic systems[cite: 58].

| Architectural Tier | Component & Technology | Primary Responsibilities |
| :--- | :--- | :--- |
| **Presentation Tier (Client)** | Mobile App (Android 10+ / iOS 13+) | Handles UI rendering, user interactions, local state management, and asset uploads. |
| **Application Tier (Server)** | Node.js / Express API Server (Ubuntu / Win Server) | Executes business logic, payment timeout triggers, order routing, and input validation. |
| **Data Tier (Database)** | MySQL / MariaDB Database Server | Maintains relational integrity across Customer, Vendor, Order, Item, and Review tables. |

#### Hardware & Infrastructure Minimum Requirements

* **Application Server:** Intel Core i7-12700 (12 Cores), 32 GB RAM, 2 TB SSD, 100 Mbps Ethernet.
* **Database Server:** Intel Xeon Silver 4310 (12 Cores), 64 GB RAM, 4 TB SSD Enterprise Storage, 100 Mbps Ethernet.
* **Client Devices:** Broadband 4G/5G, minimum 4 GB RAM (Snapdragon 665 / Apple A12 Bionic).

---

## Redesigned Mobile UI/UX Showcase

*The user interface was completely redesigned to improve catalog visual hierarchy, streamline multi-item delivery setups, and elevate customer trust.*

### 1. Discovery & Vendor Showcase
Modernized landing feeds highlighting promotional banners, category filters (Skincare, Hari Raya, Events), and vendor detail cards.

![Hampiness Discovery & Vendor Detail](/images/hampiness-ui-showcase.png)
*Figure 1.0: Redesigned Vendor Spotlight, Category Filtering, and Product Detail screens.*

---

### 2. Multi-Schedule Checkout & Real-Time Fulfillment
Simplified checkout flow supporting custom delivery timestamps per package, automated Virtual Account payment countdowns, and order status tracking.

![Hampiness Checkout & Fulfillment](/images/hampiness-ui-showcase.png)
*Figure 2.0: Multi-item checkout interface, payment confirmation screen, and vendor delivery submission flow.*
# 📄 Digital Contract Management System (Gerätewelt)

> **Skill Showcase:** A bespoke full-stack business application designed to digitize the paper-based contract workflow for **Gerätewelt** ([www.geraetewelt.com](http://www.geraetewelt.com)), a premium electrical appliance retailer in Cologne, Germany.

This project demonstrates the transformation of a traditional paper-heavy business process into a modern, secure, and data-driven digital ecosystem.

---

## 🏗️ The Challenge: From Paper to Pixels

Gerätewelt previously relied on manual, carbon-copy paper forms for sales and service contracts. This process was prone to calculation errors, difficult to search, and lacked real-time visibility.

**The Solution:** A specialized B2B platform that handles the entire contract lifecycle:
1.  **Intake:** Guided multi-step wizard for sales technicians.
2.  **Logic:** Automated VAT (19% MwSt) and profit margin calculations.
3.  **Validation:** Live address lookups via OpenStreetMap to ensure delivery accuracy.
4.  **Execution:** Dual-mode digital signatures (On-device signing pad + Remote QR code signing).
5.  **Analytics:** AI-powered natural language analysis for business intelligence.

---

## ✨ Key Features & Technical Highlights

### 🛠️ Core Business Logic
- **Reverse Tax Engine:** Technicians input the final "Brutto" price, and the system automatically extracts the 19% MwSt and Netto values to ensure legal compliance.
- **Dynamic Contract Wizard:** A step-by-step UI that ensures no critical data (Gerätetyp, Rechnungs-Nr, Payment method) is missing before finalization.
- **Professional PDF/Print Engine:** Custom CSS print media queries generate industry-standard invoices precisely matched to the brand's physical letterhead.

### 📱 Innovative Workflow
- **Remote QR Signing:** A technician can generate a unique QR code on their tablet; the customer scans it with their own phone to sign securely without touching the technician's device.
- **Fixed Technician Signatures:** Technicians save their signature once; it is automatically injected into every contract they create, saving minutes per stop.
- **Real-Time Dashboards:** Utilizing **Socket.IO** for live updates of revenue stats and contract statuses as they happen in the field.

### 🤖 AI-Driven Intelligence (Claude 3)
- **Natural Language Reports:** Instead of complex filters, owners can ask: *"What was our total profit from Miele appliances in February?"*
- **Automated Translation:** Instantly converts legal German contracts into English, Turkish, or Polish while maintaining professional business terminology.

---

## 🛠️ Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | React 18 / MUI 6 | For a responsive, premium "Enterprise" feel. |
| **Backend** | Node.js (Express 5) | Scalable, high-performance API handling. |
| **Intelligence**| Claude 3 (Haiku) | Handles complex data reasoning and translation. |
| **Real-time** | Socket.IO | Powers the live dashboard updates. |
| **Data** | SQLite / Sequelize | Lightweight, portable, yet powerful relational mapping. |
| **Maps** | OpenStreetMap | Zero-cost, high-accuracy address validation. |

---

## 📁 Project Architecture

```
├── client/                 # React frontend (Vite)
│   └── src/
│       ├── pages/          # Dashboard, ContractForm, AI Assistant
│       ├── components/     # Layout, Signature Pads, RemoteSign
│       └── services/       # Axios client & WebSockets
├── server/                 # Node.js backend
│   ├── models/             # Sequelize schemas (Contract, User)
│   ├── routes/             # Business logic (AI, Auth, Contracts)
│   ├── middleware/         # Security & RBAC
│   └── utils/              # Calculation helpers & JWT
└── package.json            # Full-stack orchestration
```

---

## ⚙️ How to Review Locally

Interested in the code? You can run the full environment on your machine:

1.  **Clone & Install:**
    ```bash
    git clone https://github.com/InezTech/DigitalKaufvertraf.git
    cd DigitalKaufvertraf
    npm run install-all
    ```
2.  **Environment:** Create a `server/.env` file with a `JWT_SECRET` and optional `CLAUDE_API_KEY`.
3.  **Seed & Run:**
    ```bash
    npm run seed   # Creates a test admin account
    npm run dev    # Starts both Frontend and Backend
    ```

---

*This project is a showcase of full-stack engineering, UX design, and AI integration applied to real-world business optimization.*

> A full-stack business application for creating, signing, and managing digital sales contracts — built for a German electrical appliance retail company.

**Live Demo:** [Link to Railway deployment]  
**Demo Login:** `demo@demo.com` / `Demo@2024`

---

## 🖼️ Screenshots

> *(Add screenshots of Dashboard, Contract Form, Printed Invoice)*

---

## ✨ Features

- **Multi-step contract wizard** — step-by-step guided contract creation
- **Reverse tax calculation** — input Brutto price, auto-calculates Netto + 19% MwSt (German VAT)
- **Smart address autocomplete** — live lookup via OpenStreetMap/Nominatim API
- **Digital signatures** — canvas-based signing pad for technicians and customers
- **Remote QR signing** — customers scan a QR code on their phone to sign remotely
- **Fixed default signature** — technicians save their signature once, auto-loads on every contract
- **Real-time dashboard** — live contract updates via Socket.IO WebSockets
- **AI Business Analyst** — Claude AI integration for natural language business queries ("How much revenue this month?")
- **PDF-ready print layout** — professional invoice with letterhead, payment notes, signatures
- **Role-based access control** — Admin / Technician / Viewer roles
- **Export to Excel** — Admin-only XLSX export of all contracts
- **Bilingual payment notes** — German + English payment instructions on all invoices

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Material UI 6, Vite |
| **Backend** | Node.js, Express 5 |
| **Database** | SQLite (via Sequelize ORM) |
| **Auth** | JWT + bcrypt |
| **Real-time** | Socket.IO |
| **AI** | Anthropic Claude 3 (claude-3-haiku) |
| **Maps** | OpenStreetMap Nominatim API |
| **PDF/Print** | CSS Print Media Queries |
| **Charts/Export** | SheetJS (XLSX) |

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/YOURNAME/digital-contract-system.git
cd digital-contract-system

# Install all dependencies
npm run install-all

# Set up environment variables
cp server/.env.example server/.env
# Edit server/.env with your values

# Seed the demo admin account
npm run seed

# Start development server
npm run dev
# Frontend: http://localhost:5174
# Backend:  http://localhost:5000
```

---

## ⚙️ Environment Variables

Create `server/.env`:
```env
PORT=5000
JWT_SECRET=your_random_secret_here
CLAUDE_API_KEY=your_anthropic_api_key   # Optional – AI features
```

---

## 🔐 Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | demo@demo.com | Demo@2024 |
| Technician | tech@demo.com | Demo@2024 |

---

## 📁 Project Structure

```
├── client/                 # React frontend (Vite)
│   └── src/
│       ├── pages/          # Dashboard, ContractForm, ContractDetail, Login...
│       ├── components/     # Layout, reusable UI
│       └── services/       # Axios API client
├── server/                 # Node.js backend
│   ├── models/             # User, Contract (Sequelize)
│   ├── routes/             # auth, contracts, AI
│   ├── middleware/         # JWT protect, authorize
│   └── utils/              # bcrypt, JWT helpers
└── package.json            # Root orchestration scripts
```

---

## 🎨 Design Highlights

- German-language business UI (professional B2B aesthetics)
- Premium card-based dashboard with live revenue stats
- Print-optimized invoice with company letterhead integration
- Responsive layout (desktop sidebar + mobile header)

---

*Built as an internal business tool for a German Köln-based electrical appliance retailer. Replaces a fully paper-based contract and quotation workflow with a secure digital system.*

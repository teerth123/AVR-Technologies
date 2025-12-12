README.md


[View the LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7404567633020530688/)

# ⚡ EV Charging Automation Platform – AVR Technologies  
Smart Slow-Charging System with QR Authentication, IoT Telemetry & Automated Billing
Our project EV Charging Automation Platform was officially selected by the RGSTC Technical Screening Committee as one of the top 3 projects from WCE, receiving a ₹1,00,000 grant recommendation for Phase 2.
This project was developed as part of the **RGSTC – MSME Internship Programme (Cycle 8, Phase 1)** in collaboration with **AVR Technologies**.  
It focuses on transforming traditional slow EV charging sockets into **intelligent, trackable, and billable smart charging points**.

🚀 **Achievement:**  
Our project **EV Charging Automation Platform** was officially **selected by the RGSTC Technical Screening Committee as one of the top 3 projects from WCE** for Phase-2 continuation and government funding.

---

## 🔌 **Project Overview**

Most slow EV charging points in India work like normal sockets — no authentication, no metering, no billing, and high chances of misuse.  
This platform solves that by adding:

- QR-based user identification  
- Secure authentication (JWT)  
- Real-time IoT data ingestion  
- Session lifecycle management  
- Automated billing with Razorpay  
- Role-based dashboards (User / Operator / Reseller / OEM)

This converts any slow charger into a **smart, remotely manageable charging station**.

---

## 🧩 **Key Features**

### **User Experience**
- Scan QR → Auto-detect charger (CID)
- Login / register flow via JWT auth
- Start/stop charging via phone
- Live session tracking (power, kWh, time)
- Charging history + receipts

### **Backend Features**
- REST API built with TypeScript + Express
- Prisma schema for Users, Sessions, Chargers, Operators
- Secure JWT + RBAC (User / Operator / Reseller / OEM)
- IoT gateway for receiving JSON packets every 30 seconds
- Billing logic (kWh-based or time-based)
- Razorpay integration (payment verification included)

### **Operator / Business Features**
- Remote start/stop control
- Fault & health monitoring
- Charger online/offline status
- Revenue analytics (per charger / per operator)
- Energy consumption dashboards

---

## 🏗️ **System Architecture**



User → QR Scan → Auth Server (JWT) → Charging Session Service
→ IoT Gateway → Live Power Data → Billing Engine → Razorpay
→ Dashboards (User / Operator / Reseller / OEM)


Backend Components:
- **Auth Service** – JWT auth, refresh tokens, RBAC  
- **Charging Service** – session state machine  
- **IoT Service** – handles charger telemetry  
- **Billing Service** – energy computation + Razorpay  
- **Analytics Service** – energy, uptime, revenue insights  

---

## 🛠️ **Tech Stack**

**Frontend**
- React + Vite  
- TypeScript  
- Tailwind CSS  
- WebSockets for live data  

**Backend**
- Node.js (Express)  
- TypeScript  
- Prisma ORM  
- JWT authentication  
- Role-based access control  
- Razorpay API  

**Database**
- PostgreSQL / MongoDB  
- Redis (optional) for caching active sessions  

---

## 📂 **Project Structure**



.
├── backend/
│ ├── src/
│ │ ├── auth/
│ │ ├── chargers/
│ │ ├── sessions/
│ │ ├── billing/
│ │ ├── prisma/
│ │ └── utils/
│ └── package.json
│
└── frontend/
├── vite-project/
├── src/
└── package.json


---

## 🧪 **Local Setup**

### **Backend**
```sh
cd backend
npm install
npx prisma migrate dev
npm run dev

Frontend
cd frontend/vite-project
npm install
npm run dev

📸 Screenshots (Add later)
[ ] QR Scan Flow  
[ ] Dashboard Preview  
[ ] Charging Session View  
[ ] API Schema Snapshots  

🏆 Project Recognition

✔ Selected by Rajiv Gandhi Science and Technology Commission (RGSTC)
✔ Chosen as one of the top 3 projects from WCE Sangli for continuation
✔ Evaluated by RGSTC Technical Screening Committee, Industry Experts & Faculty

🙌 Contributors

Teerth Kulkarni – Full-Stack Development, JWT Auth, APIs, Prisma Schema

Vinit Mohite – Backend Support, Documentation, Hardware Testing

Industry Mentor: Mr. Vinay Honrao, AVR Technologies

Faculty Guides:

Dr. R. R. Rathod

Dr. Vijay Mohale

Dr. Rahul Chanmanwar

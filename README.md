# 🏙️ Megaplex Prime - Luxury Real Estate Platform

> A full-stack MERN application with a custom Content Management System (CMS), real-time updates, and a pixel-perfect responsive design.

![Project Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture & Design](#-architecture--design)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)

---

## 🔭 Project Overview

**Megaplex Prime** is a marketing and management platform for a high-end real estate development. Unlike static landing pages, this application is fully dynamic.

The project solves a key business problem: **How to keep website content fresh without developer intervention.** It features a secure **Admin Dashboard** where non-technical staff can update prices, upload construction photos, modify FAQs, and change project details instantly. The frontend leverages **React Query** for smart caching and **Optimistic Updates**, ensuring that changes made in the dashboard appear on the public site immediately without a page refresh.

---

## ✨ Key Features

### 🌍 **Public Interface**

- **Pixel-Perfect Design:** Fully responsive UI built with Tailwind CSS v4, optimized for mobile, tablet, and desktop.
- **Dynamic Content:** All text, images, amenities, and pricing are fetched from the database, not hardcoded.
- **Smart Polling:** The homepage automatically detects updates from the CMS and refreshes content in real-time (Window Focus Refetching).
- **Interactive Components:** Custom-built carousels, accordion FAQs, and glassmorphism UI effects.

### 🛡️ **Admin Dashboard (CMS)**

- **Secure Authentication:** Protected route system with hardcoded credentials for demo purposes (`admin@gmail.com` / `1234`).
- **Visual Editor:** A user-friendly interface to edit complex data structures like lists (Amenities, Construction Updates) and long-form text.
- **Live Feedback:** Integrated `react-hot-toast` for success/error notifications during data operations.
- **Dynamic Forms:** The dashboard automatically generates form fields based on the content type selected.

---

## 🛠 Tech Stack

### **Frontend (`/client`)**

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS v4 (New!)
- **State Management:** TanStack Query (React Query)
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

### **Backend (`/server`)**

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas) & Mongoose
- **Language:** TypeScript
- **Architecture:** Modular (Controller-Service-Repository pattern)

---

## 🏗 Architecture & Design

### **Data Flow**

1.  **Read:** The frontend uses `useQuery` to fetch content. Data is cached and only refetched when the window gains focus or the cache is invalidated.
2.  **Write:** The Admin Dashboard uses `useMutation` to send updates to the backend.
3.  **Sync:** Upon a successful save, the mutation automatically invalidates the `['content']` query key, forcing the Home page to re-fetch fresh data instantly.

### **Folder Structure**

```bash
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
├── server/
│   ├── src/
│   │   ├── modules/
│   │   └── utils/


```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Connection String (Atlas or Local)

### 1. Clone the Repository

```bash
git clone [https://github.com/yourusername/megaplex-prime.git](https://github.com/AdityaGhamat/MEGAPLEX-PRIME-ASSIGNMENT)
cd MEGAPLEX-PRIME-ASSIGNMENT


```

### 2. Setup Backend

```bash
cd server
npm install
# Create a .env file and add your MONGO_URI
echo "MONGO_URI=your_mongodb_connection_string" > .env
# Seed the database with initial content
npx ts-node src/seed.ts
# Start the server
npm run dev


```

_Server runs on `http://localhost:5000_`

### 3. Setup Frontend

Open a new terminal:

```bash
cd client
npm install
# Start the Vite development server
npm run dev


```

_Client runs on `http://localhost:5173_`

---

## 🔐 Environment Variables

### **Backend (`server/.env`)**

| Variable    | Description                              |
| ----------- | ---------------------------------------- |
| `MONGO_URI` | Connection string for MongoDB database   |
| `PORT`      | (Optional) Port number, defaults to 5000 |

### **Frontend (`client/.env`)**

| Variable       | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `VITE_API_URL` | URL of the backend API (e.g., `http://localhost:5000/api`) |

---

## 📚 API Documentation

| Method | Endpoint                  | Description               | Access |
| ------ | ------------------------- | ------------------------- | ------ |
| `GET`  | `/api/content`            | Fetch all site content    | Public |
| `PUT`  | `/api/content/:sectionId` | Update a specific section | Admin  |
| `POST` | `/api/auth/login`         | Admin login               | Public |

---

## 🚢 Deployment

Both the frontend and backend are deployed on **Vercel** for high availability and fast global delivery.

### **Backend (Vercel Serverless)**

1.  Connected the repo and set Root Directory to `server`.
2.  Configured `vercel.json` to handle Express routing via `@vercel/node`.
3.  Environment Variables: `MONGO_URI` added to the Vercel dashboard.

### **Frontend (Vercel)**

1.  Connected the repo and set Root Directory to `client`.
2.  Framework Preset: **Vite**.
3.  Environment Variables: `VITE_API_URL` pointing to the Vercel Backend URL.

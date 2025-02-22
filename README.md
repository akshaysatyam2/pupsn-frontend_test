# PupsN Frontend README

## Overview
PupsN.com is a pet-focused platform where users can interact through queries, store pet information, receive AI-based insights, and connect with other pet owners. The frontend is built using Next.js for a scalable, SEO-friendly, and high-performance user experience.

---

## Tech Stack
- **Framework:** Next.js (React-based, SSR & SSG support)
- **Styling:** Tailwind CSS, Material UI (optional for components)
- **State Management:** Zustand / Redux Toolkit
- **Authentication:** NextAuth.js (Google, Facebook, email login)
- **Payments:** Stripe
- **File Storage:** Google Drive API / AWS S3 (optional)

---

## Folder Structure
```
/pupsn-frontend
│── /public            # Static assets (logos, icons, etc.)
│── /components        # Reusable React components
│── /pages             # Next.js pages (SSR & SSG capabilities)
│── /hooks             # Custom React hooks
│── /store             # Zustand/Redux state management
│── /styles            # Tailwind CSS global styles
│── /utils             # Utility functions
│── next.config.js     # Next.js configuration
│── package.json       # Dependencies & scripts
│── README.md          # Documentation
```

---

## Features & Pages Workflow

### 1️⃣ Home Page (`/`)
- Users can ask basic pet-related queries.
- Limited access without login.
- Call to action for signup/login.

### 2️⃣ Authentication (`/login`, `/signup`)
- User authentication handled via NextAuth.js.
- Social login options (Google, Facebook) & email-based login.

### 3️⃣ Dashboard (`/dashboard`)
- Free users can add pet details & ask more questions.
- Subscription required for unlimited queries & additional features.

### 4️⃣ Pet Profile (`/pets`)
- Users can store and manage pet details.
- Upload pet pictures (Google Drive API integration).
- AI-based responses for pet care insights.

### 5️⃣ Subscription (`/subscribe`)
- Stripe integration for payments.
- Unlocks premium features like unlimited queries & pet alerts.

### 6️⃣ Community (`/community`)
- Users can share pet images & videos.
- Option to connect and interact with other pet owners.

### 7️⃣ Notifications (`/notifications`)
- Users receive vaccination & health alerts via email.
- Updates on their pet's stored details.

---

## API Integration
- **Auth API** → Handles user authentication & session management.
- **Pet API** → CRUD operations for managing pet data.
- **Query API** → Fetches AI-based answers for pet-related questions.
- **Image API** → Handles pet image uploads (Google Drive / AWS S3).
- **Subscription API** → Handles payment processing & plan management.
- **Notification API** → Sends vaccination & health alerts via email.

---

## Deployment
| Component       | Deployment Service |
|----------------|-------------------|
| **Frontend**   | Vercel (fast, scalable) |
| **Backend**    | Railway.app / Render |
| **Database**   | NeonDB (serverless PostgreSQL) |
| **Storage**    | Google Drive API / AWS S3 |

---

## Getting Started
### **Installation & Setup**
```sh
# Clone the repository
git clone https://github.com/akshaysatyam2/pupsn.com.git
cd pupsn.com

# Install dependencies
yarn install  # or npm install

# Create an `.env.local` file and configure the following:
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
STRIPE_PUBLIC_KEY=your_stripe_key

# Run the development server
yarn dev  # or npm run dev
```
- The app will be available at `http://localhost:3000`.

---

## Future Enhancements
- **AI-based pet health monitoring** using ML models.
- **Live chat feature** for user interactions.
- **Gamification** (reward points, badges for pet care).

---
# ArkLab AI Agent Catalog

A modern web application built with **Next.js App Router**, **NextAuth**, **Tailwind CSS** **ShadCN**, and **Redux Toolkit**, showcasing a catalog of AI agents with authentication via Google OAuth.

## 🚀 Features

- App Router (`app/`) based routing
- Google OAuth 2.0 authentication via `next-auth`
- Dynamic filtering by agent status (Active, Beta, etc.)
- Redux for global state management
- Mocked data for AI agent listing
- Styled with Tailwind CSS, ShadCN and utility-first components

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **NextAuth**
- **Tailwind CSS**
- **ShadCN**
- **Redux Toolkit**
- **Vercel** (for deployment)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sakibahmed2/arkLab-ai-agent-catalog.git
cd arkLab-ai-agent-catalog
```

### 2. Install Dependency

```bash
npm install
# or
yarn
```

### 3. Create `.env.local`

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
```

### 4. Run locally

```bash
npm run dev
# or
yarn dev
```

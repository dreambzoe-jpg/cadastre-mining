# Cadastre Mining Compliance Advisory

A professional landing page for a Zambian mining consultant specialising in regulatory compliance, cadastre administration, and statutory reporting — with a built-in AI Regulatory Assistant powered by Claude.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1 — Upload to GitHub
1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Click the **+** icon → **New repository**
3. Name it `cadastre-mining-advisory` → click **Create repository**
4. Upload all these project files into the repository

### Step 2 — Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `cadastre-mining-advisory` repository
4. Vercel will auto-detect it as a **Vite** project

### Step 3 — Add your API Key (Important!)
Before deploying, add your environment variable:
1. In Vercel's project setup screen, click **Environment Variables**
2. Add the following:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key from [console.anthropic.com](https://console.anthropic.com)
3. Click **Add**

### Step 4 — Deploy
Click **Deploy** — your site will be live in ~60 seconds at a `.vercel.app` URL!

---

## 💻 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher

### Setup
```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local

# 3. Add your Anthropic API key to .env.local
# Open .env.local and replace the placeholder with your real key

# 4. Start the development server
npm run dev
```

The app will open at **http://localhost:5173**

---

## 📁 Project Structure

```
cadastre-mining-advisory/
├── public/
│   ├── consultation.jpg     # Hero image
│   └── favicon.svg
├── src/
│   ├── App.tsx              # Main site layout & all sections
│   ├── RegulatoryAssistant.tsx  # AI chat widget
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # Vite HTML entry
├── vercel.json              # Vercel deployment config
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🔑 Getting Your Anthropic API Key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up / log in
3. Click **API Keys** in the sidebar
4. Click **Create Key** and copy it
5. Paste it into Vercel's Environment Variables as `ANTHROPIC_API_KEY`

---

## 🛠 Tech Stack
- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Claude API** (AI chat assistant)
- **Vercel** (hosting)

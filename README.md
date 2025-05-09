# 🌍 Country Explorer

**Country Explorer** is a frontend application that allows users to browse information about countries around the world, using the public [REST Countries](https://restcountries.com/) API. The app supports filtering, sorting, searching, and personalization of appearance and language.

---

## ✨ Features

* Display country cards with flag, name and continent
* Filter by continent, region, subregion
* Sort by name, population, area, country code
* Country search functionality
* Light / dark mode (Tailwind + next-themes)
* Multi-language support (i18n via next-intl)
* Mobile-first responsive layout

---

## 🚀 Technologies

* **Next.js 15** (App Router)
* **TypeScript**
* **Tailwind CSS** + light/dark mode
* **@tanstack/react-query** – data fetching & caching
* **Zod** – API response validation
* **Headless UI** – UI components
* **next-intl** – internationalization

---

## 💡 Prerequisites

* Node.js (v18+ recommended)
* npm

---

## 🔧 How to run locally

1. **Clone the repository**

```bash
git clone https://github.com/MWalczewski/country-explorer-app.git
cd country-explorer-app
```

2. **Install dependencies**

```bash
npm install
# or npm i
```

3. **Create .env.local file**

This file stores the base API URL (e.g. `NEXT_PUBLIC_API_URL=https://restcountries.com/v3.1`) and optionally the environment type.

```bash
touch .env.local
```

4. **Start the application**

```bash
npm run dev
```

5. **Open in browser**

[http://localhost:3000](http://localhost:3000)

---

## 🌐 Available languages

* Polish (`/pl`)
* English (`/en`)

---

## ✍️ Author

**Maciej Walczewski**. Project built for educational and demo purposes.

---

## ✨ TO DO:

* Filtering by population and area range
* Country detail view (population, languages, currencies, timezones, borders)
* Favorites and "to visit" / "visited" lists (localStorage)
* Registration and login (auth)
* Backend (e.g., persistent favorites/visited data)

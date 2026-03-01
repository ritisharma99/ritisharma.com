# ritisharma.com

Personal portfolio site for Riti Sharma — PhD researcher in biomechanical engineering at the University of Pennsylvania.

Built with **Nuxt 3**, **Tailwind CSS**, and deployable to **Netlify** with **Decap CMS** for content management.

---

## Stack

| Layer | Tool |
|---|---|
| Framework | [Nuxt 3](https://nuxt.com) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Images | [@nuxt/image](https://image.nuxt.com) (WebP + lazy loading) |
| Content | [@nuxt/content](https://content.nuxt.com) (Markdown) |
| Fonts | [@nuxtjs/google-fonts](https://google-fonts.nuxtjs.org) (Poppins) |
| CMS | [Decap CMS](https://decapcms.org) (at `/admin`) |
| Deployment | [Netlify](https://netlify.com) |

---

## Project Structure

```
ritisharma.com/
├── assets/css/         # Tailwind global styles
├── components/         # Shared components (Navbar, Footer, InstitutionBadge, etc.)
├── content/            # Markdown content (edited via CMS)
├── layouts/            # Page layouts (default, poster)
├── pages/              # File-based routing
│   ├── index.vue       # Home (About + Contact)
│   ├── work.vue        # Education / Experience / Research (tabbed)
│   ├── creative/       # Creative sub-pages
│   └── posters/        # Conference poster viewers
├── public/             # Static assets (images, admin CMS)
│   └── admin/          # Decap CMS (index.html + config.yml)
├── netlify.toml        # Netlify build config
├── nuxt.config.ts
└── tailwind.config.ts
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build & Preview

```bash
npm run generate       # static output → .output/public/
npx serve .output/public  # local preview
```

---

## Deployment (Netlify)

The [netlify.toml](netlify.toml) at the repo root is pre-configured:

- **Base directory:** root
- **Build command:** `npm run generate`
- **Publish directory:** `.output/public`

Push to `main` and Netlify will build and deploy automatically.

---

## Content Management (Decap CMS)

The CMS is available at **`/admin`** on the live site.

To enable it:
1. Go to your Netlify site → **Identity** → Enable Identity
2. Under Identity → **Services** → Enable Git Gateway
3. Invite yourself as a user
4. Visit `https://ritisharma.com/admin` to log in and edit content

Editable collections: Blog Posts · Publications · Talks · Experience · Education · Creative Projects · Site Pages (Home, Future)

---

## Navigation

| Route | Description |
|---|---|
| `/` | Home — about me + contact form |
| `/work?tab=education` | Education |
| `/work?tab=experience` | Experience |
| `/work?tab=research` | Publications & talks |
| `/creative` | Creative hub |
| `/creative/trips` | Road trips |
| `/creative/printing` | 3D printing projects |
| `/creative/blog` | Blog |
| `/posters/ses-2025` | SES 2025 poster |
| `/posters/sb3c-2024` | SB3C 2024 poster |
| `/posters/pcmd-2023` | PCMD 2023 poster (🏆) |
| `/posters/ses-2023` | SES 2023 poster (🏆) |

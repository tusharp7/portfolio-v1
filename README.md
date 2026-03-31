# Portfolio V1

A personal portfolio website for Tushar Birajdar, built with a React frontend and a Node.js + Express backend.

The site presents resume-based content including experience, projects, achievements, skills, and contact details in a black-and-white editorial layout inspired by modern developer portfolios.

## Tech Stack

- Frontend: React 18 via CDN
- Backend: Node.js + Express
- Styling: Custom CSS
- Deployment: Vercel

## Features

- Responsive single-page portfolio layout
- Backend API for portfolio content
- Resume download endpoint
- Project cards with external links
- Black-and-white visual theme

## Project Structure

```text
.
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── portfolio-data.js
├── server.js
├── package.json
└── Tushar_Resume.pdf
```

## How It Works

- [server.js](/Users/tusharbirajdar/Documents/New%20project/server.js) serves the static frontend and exposes backend routes.
- [portfolio-data.js](/Users/tusharbirajdar/Documents/New%20project/portfolio-data.js) stores the portfolio content returned by the API.
- [public/app.js](/Users/tusharbirajdar/Documents/New%20project/public/app.js) renders the React UI and fetches data from `/api/portfolio`.
- [public/styles.css](/Users/tusharbirajdar/Documents/New%20project/public/styles.css) contains the full custom styling.

## API Routes

- `GET /api/portfolio` returns the portfolio content as JSON
- `GET /resume` downloads the resume PDF

## Local Development

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open:

```text
http://127.0.0.1:3000
```

## Deployment

This project is set up to deploy on Vercel as an Express app.

If deploying from GitHub:

1. Push changes to the `main` branch.
2. Vercel will automatically create a new deployment if the repository is connected.

If deploying manually with the CLI:

```bash
npx vercel deploy
```

## Notes

- The resume file is served from the project root as `Tushar_Resume.pdf`.
- If Vercel Authentication is enabled, the deployed site may require login before it becomes publicly viewable.
- The `Events Judging App` card currently links to the main GitHub profile as a fallback until a dedicated public repository or live link is added.

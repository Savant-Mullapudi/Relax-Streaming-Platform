# Relax — Video Streaming Platform

A YouTube-inspired video streaming app built with React. Search, browse by category, and watch videos through a clean, responsive interface powered by the YouTube Data API.

🌐 **Live Demo**: [relax-streaming-platform.netlify.app](https://relax-streaming-platform.netlify.app/)

![Relax Streaming Platform](./Relax%20Webpage.png)

---

## Features

- **Video search** — real-time search powered by the YouTube Data API via RapidAPI
- **Category browsing** — sidebar navigation to explore videos by topic
- **Video playback** — dedicated watch page with embedded player via React Player
- **Related videos** — dynamically loaded suggestions alongside the active video
- **Channel info** — thumbnails, titles, view counts, and channel metadata on every card
- **Responsive layout** — optimized for desktop and mobile with adaptive grid and sidebar behavior

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI Framework | React 18 |
| Routing | React Router v6 |
| Component Library | Material UI (MUI) v5 |
| Video Playback | React Player |
| Data Source | YouTube Data API (via RapidAPI) |
| Hosting | Netlify |

---

## Project Structure

```
Relax-Streaming-Platform/
├── public/
│   └── index.html
├── src/
│   ├── components/         # Reusable UI components (Navbar, VideoCard, Sidebar, etc.)
│   ├── pages/              # Page-level components (Home, VideoDetail, SearchFeed, ChannelDetail)
│   ├── utils/              # API fetch helpers and constants (categories, API config)
│   ├── App.js              # Root component with routing setup
│   └── index.js            # React DOM entry point
├── .env                    # API key configuration (not committed)
├── package.json
└── README.md
```

---

## Running Locally

### Prerequisites
- Node.js v16+
- A RapidAPI account with access to the [YouTube v3 API](https://rapidapi.com/ytdlfree/api/youtube-v31/)

### Setup

```bash
# Clone the repository
git clone https://github.com/Savant-Mullapudi/Relax-Streaming-Platform.git
cd Relax-Streaming-Platform

# Install dependencies
npm install

# Create a .env file and add your RapidAPI key
echo "REACT_APP_RAPID_API_KEY=your_api_key_here" > .env

# Start the development server
npm start
```

The app will be available at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

---

## Key Implementation Details

- **API abstraction** — all YouTube Data API calls are centralized in a single `fetchFromAPI` utility, keeping components clean and making it easy to swap the data source
- **Dynamic routing** — React Router v6 handles navigation between home, search results, video playback, and channel pages without full page reloads
- **Responsive grid** — MUI's `Grid` and `Box` components adapt the layout across screen sizes, collapsing the sidebar on mobile
- **Environment variable security** — the RapidAPI key is stored in `.env` and excluded from version control via `.gitignore`

---

## Deployment

Deployed on **Netlify** with continuous deployment from the `main` branch. Any push to `main` triggers an automatic rebuild and redeploy.

To deploy your own fork:
1. Push the repo to your GitHub account
2. Connect it to [Netlify](https://netlify.com)
3. Set `REACT_APP_RAPID_API_KEY` as an environment variable in Netlify's dashboard
4. Netlify will auto-detect the React build settings (`npm run build`, publish dir `build/`)

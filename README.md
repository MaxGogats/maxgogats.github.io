# Max's Computers — Static Site

## First time setup (one time only)
​```bash
npm install -D tailwindcss@3
​```

## Build the CSS
​```bash
npx tailwindcss -i input.css -o styles.css --minify
​```

Run this every time you change `index.html` and add new Tailwind classes.

## Auto-rebuild while editing (optional)
​```bash
npx tailwindcss -i input.css -o styles.css --watch
​```

Leave running in a terminal — rebuilds automatically as you save.

## Deploy
​```bash
git add index.html styles.css
git commit -m "update"
git push
​```

## Files
- `index.html` — the site
- `input.css` — Tailwind entry (don't edit unless adding custom CSS)
- `tailwind.config.js` — colors, fonts, content paths
- `styles.css` — generated, committed to repo
- `package.json` — dev dependencies

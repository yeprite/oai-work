# Hello World

A responsive HTML, CSS, and JavaScript web app with no external dependencies.
Click **Click Me** to display **Welcome to my first app!**.

## Run

Open `index.html` directly in a modern browser. No installation or build is needed.

Alternatively, with Python 3.10 or later:

```sh
cd /workspace/oai-work
python3 app.py
```

Visit the server on port 8000 in your browser. Set `PORT=8080` before the command
for a different port. Press Ctrl+C to stop.

## Files

- `index.html`: page structure, heading, button, and accessible status message.
- `styles.css`: centered card, responsive typography, colors, and focus styles.
- `script.js`: button interaction that displays the welcome message.
- `app.py`: optional local server using only Python's standard library.

## Test manually

1. Open the page and confirm **Hello World!** and **Click Me** are visible.
2. Click the button and confirm **Welcome to my first app!** appears.
3. Reload, use Tab to focus the button, and press Enter or Space; confirm the same message.
4. Resize to a narrow mobile viewport and confirm the card fits without horizontal scrolling.

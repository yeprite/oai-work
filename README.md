# Hello World

A responsive HTML, CSS, and JavaScript web app with no external dependencies.
Click **Click Me** to display **Welcome to my first app!**.
Click **hello my friends** to display the same greeting in the message area.
Enter two numbers and press **Give me total** to display their sum. Decimals,
negative numbers, and zero are supported. Both fields are required.
The calculator uses JavaScript floating-point arithmetic and displays up to
15 significant digits; it is intended for everyday calculations.

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
5. Enter `12.5` and `7.5`, then press **Give me total** (or Enter); confirm **Total: 20**.
6. Try negative numbers, zero, and empty fields. Empty fields should prevent submission.

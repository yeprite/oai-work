"""Serve the Hello World static site with Python's standard library."""

import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "8000"))
    handler = partial(SimpleHTTPRequestHandler, directory=str(Path(__file__).parent))
    server = ThreadingHTTPServer(("0.0.0.0", port), handler)
    print(f"Hello World app listening on port {port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

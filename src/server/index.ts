import "dotenv/config";

import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = "egolounge";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, hostname, port });
const nextJSRequestHandler = app.getRequestHandler();

app.prepare().then(async () => {
  const server = createServer(async (req, res) => {
    const parsedUrl = parse(req.url!, true);

    switch (parsedUrl.pathname) {
      default:
        nextJSRequestHandler(req, res, parsedUrl);

        break;
    }
    return;
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});

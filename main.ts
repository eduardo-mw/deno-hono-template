import { Hono } from "hono";

const app = new Hono();

app.get("/health", (c) => {
  return c.json({ "status": "up" });
});

Deno.serve(app.fetch);

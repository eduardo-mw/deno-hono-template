import { Hono } from "hono";
import players from "./routes/players.ts";

const app = new Hono();

app.get("/health", (c) => {
  return c.json({ "status": "up" });
});

// Routes
app.route("/players", players);

Deno.serve(app.fetch);

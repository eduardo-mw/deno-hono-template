import mongoose from "mongoose";
import { Hono } from "hono";
import players from "./routes/players.ts";

await mongoose.connect("mongodb://localhost:27017");
console.log(mongoose.connection.readyState);

const app = new Hono();

app.get("/health", (c) => {
  return c.json({ "status": "up" });
});

// Routes
app.route("/players", players);

Deno.serve(app.fetch);

import { Hono } from "hono";

const players = new Hono();

players.get("/", (c) => c.text("List players")); // GET /players
players.get("/:id", (c) => {
  // GET /players/:id
  const id = c.req.param("id");
  return c.text("Get players: " + id);
});
players.post("/", (c) => c.text("Create players")); // POST /players

export default players;

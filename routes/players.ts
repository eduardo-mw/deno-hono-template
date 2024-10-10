import { Hono } from "hono";
import PlayerModel from "../models/Player.ts";
import { Player } from "../types/Game.d.ts";
const players = new Hono();

// GET all players
players.get("/", async (c) => {
  const allPlayers = await PlayerModel.find();
  return c.json(allPlayers);
});

// GET player by id
players.get("/:id", async (c) => {
  const id = c.req.param("id");
  const singlePlayer = await PlayerModel.findById(id);
  return c.json(singlePlayer);
});

// POST a new player
players.post("/", async (c) => {
  const body = await c.req.json<Player>();

  try {
    const newPlayer = await PlayerModel.create(body);
    return c.json(newPlayer);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ "error": error.message });
    }
  }
});

export default players;

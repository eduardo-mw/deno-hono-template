import { Hono } from "hono";
import PlayerModel, { IPlayer } from "../models/Player.ts";
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
  const body = await c.req.json<IPlayer>();
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

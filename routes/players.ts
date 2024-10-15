import { Hono } from "hono";
import PlayerModel, { IPlayer } from "../models/Player.ts";
const players = new Hono();

// GET all players
players.get("/", async (c) => {
  let allPlayers;

  try {
    allPlayers = await PlayerModel.find();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(allPlayers);
});

// GET player by id
players.get("/:id", async (c) => {
  const id = c.req.param("id");
  let singlePlayer;

  try {
    singlePlayer = await PlayerModel.findById(id);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return c.json({ error: error.message });
    }
  }

  return c.json({ singlePlayer });
});

// POST a new player
players.post("/", async (c) => {
  const body = await c.req.json<IPlayer>();
  let newPlayer;

  try {
    newPlayer = await PlayerModel.create(body);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(newPlayer);
});

players.delete("/:id", async (c) => {
  const id = c.req.param("id");
  let playerToDelete;

  try {
    playerToDelete = await PlayerModel.findByIdAndDelete(id);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(playerToDelete);
});

export default players;

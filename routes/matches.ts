import { Hono } from "hono";
import MatchModel, { IMatch } from "../models/Match.ts";
const matches = new Hono();

// GET all matches
matches.get("/", async (c) => {
  let allMatches;

  try {
    allMatches = await MatchModel.find();
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message });
    }
  }

  return c.json(allMatches);
});

// GET match by id
matches.get("/:id", async (c) => {
  const id = c.req.param("id");
  let singleMatch;

  try {
    singleMatch = await MatchModel.findById(id);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message });
    }
  }

  return c.json(singleMatch);
});

// Create a new match
matches.post("/", async (c) => {
  const body = await c.req.json<IMatch>();
  let newMatch;

  try {
    newMatch = await MatchModel.create(body);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message });
    }
  }

  return c.json(newMatch);
});

// Update a match
export default matches;

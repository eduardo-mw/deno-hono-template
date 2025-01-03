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
      console.error(error);
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
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(singleMatch);
});

matches.delete("/:id", async (c) => {
  const id = c.req.param("id");
  let matchToDelete;

  try {
    matchToDelete = await MatchModel.findByIdAndDelete(id);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(matchToDelete);
});

// Create a new match
matches.post("/", async (c) => {
  const body = await c.req.json<IMatch>();
  let newMatch;

  try {
    newMatch = await MatchModel.create(body);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(newMatch);
});

matches.put("/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json<IMatch>();
  let matchToUpdate;

  try {
    matchToUpdate = await MatchModel.findByIdAndUpdate(id, body);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }

  return c.json(matchToUpdate);
});

// Update a match
export default matches;

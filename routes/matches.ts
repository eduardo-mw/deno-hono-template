import { Hono } from "hono";
import MatchModel, { IMatch } from "../models/Match.ts";
const matches = new Hono();

// GET all matches
matches.get("/", async (c) => {
  const allMatches = await MatchModel.find();
  return c.json(allMatches);
});

// Create a new match
matches.post("/", async (c) => {
  const body = await c.req.json<IMatch>();
  try {
    const newMatch = await MatchModel.create(body);
    return c.json(newMatch);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ "error": error });
    }
  }
});

// Update a match
export default matches;

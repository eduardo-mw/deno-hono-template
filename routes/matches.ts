import { Hono } from "hono";
import MatchModel from "../models/Match.ts";
import { Match } from "../types/Game.d.ts";
const matches = new Hono();

// GET all matches
matches.get("/", async (c) => {
  const allMatches = await MatchModel.find();
  return c.json(allMatches);
});

// Create a new match

// Update a match
export default matches;

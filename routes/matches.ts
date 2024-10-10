import { Hono } from "hono";
import MatchModel from "../models/Match.ts";
import { Match } from "../types/Game.d.ts";
const matches = new Hono();

// GET all players
matches.get("/", async (c) => {
    const allMatches = await MatchModel.find();
    return c.json(allMatches);
});

export default matches;

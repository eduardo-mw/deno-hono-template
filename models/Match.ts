import { Document, model, Schema } from "mongoose";
import { Match } from "../types/Game.d.ts";

interface MatchDocument extends Match, Document {}

// Define schema.
const matchSchema = new Schema<MatchDocument>({
  player1Id: String,
  player2Id: String,
  player1Score: { type: Number, default: 0 },
  player2Score: { type: Number, default: 0 },
});

// Validations
matchSchema.path("player1Id").required(true, "player1Id name cannot be blank.");
matchSchema.path("player2Id").required(true, "player2Id name cannot be blank.");

// Export model.
export default model<MatchDocument>("Match", matchSchema);

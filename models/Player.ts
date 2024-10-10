import { Document, model, Schema } from "mongoose";
import { Player } from "../types/Game.d.ts";

interface PlayerDocument extends Player, Document {}

// Define schema.
const playerSchema = new Schema<PlayerDocument>({
  name: String,
  displayName: { type: String, unique: true },
  iconUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Validations
playerSchema.path("name").required(true, "Player name cannot be blank.");
playerSchema.path("displayName").required(true, "Player display name cannot be blank.");

// Export model.
export default model<PlayerDocument>("Player", playerSchema);

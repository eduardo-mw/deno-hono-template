import { model, Schema } from "mongoose";

// Define Interface
export interface IPlayer {
  name: string;
  displayName: string;
  iconUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define schema.
const playerSchema = new Schema<IPlayer>({
  name: String,
  displayName: { type: String, unique: true },
  iconUrl: { type: String, default: "https://placehold.co/128x128.webp" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Validations
playerSchema.path("name").required(true, "Player name cannot be blank.");
playerSchema.path("displayName").required(
  true,
  "Player display name cannot be blank.",
);

const PlayerModel = model("Player", playerSchema);

export default PlayerModel;

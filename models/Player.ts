import { model, Schema } from "mongoose";

// Define schema.
const playerSchema = new Schema({
  name: String,
  displayName: { type: String, unique: true },
  iconUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Validations
playerSchema.path("name").required(true, "Player name cannot be blank.");
playerSchema.path("displayName").required(true, "Player name cannot be blank.");


// Export model.
export default model("Player", playerSchema);
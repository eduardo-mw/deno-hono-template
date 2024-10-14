import { model, Schema, Types } from "mongoose";

// Define Interface
export interface IMatch {
  player1Id: Types.ObjectId;
  player2Id: Types.ObjectId;
  player1Score?: number;
  player2Score?: number;
  status?: number;
}

// Define schema.
const matchSchema = new Schema<IMatch>({
  player1Id: { type: Schema.Types.ObjectId, ref: "Player" },
  player2Id: { type: Schema.Types.ObjectId, ref: "Player" },
  player1Score: {
    type: Number,
    default: 0,
    min: [0, "Score cannot be less than 0"],
    max: [500, "Score cannot be greater than 500"],
  },
  player2Score: {
    type: Number,
    default: 0,
    min: [0, "Score cannot be less than 0"],
    max: [500, "Score cannot be greater than 500"],
  },
  // Status numbers are
  // 0 - Not started
  // 1 - In progress
  // 2 - Paused
  // 3 - Completed
  status: {
    type: Number,
    default: 0,
    min: [0, "Status cannot be less than 0"],
    max: [3, "Status cannot be greater than 3"],
  },
});

// Validations
matchSchema.path("player1Id").required(true, "player1Id name cannot be blank.");
matchSchema.path("player2Id").required(true, "player2Id name cannot be blank.");

// Export model.
export default model("Match", matchSchema);

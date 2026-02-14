import mongoose from "mongoose";
import env from "../config/env";
export async function connectToDatabase() {
  try {
    await mongoose
      .connect(env.DATABASE_URL)
      .then(() => console.log("connected to database"));
  } catch (error) {
    throw error;
  }
}

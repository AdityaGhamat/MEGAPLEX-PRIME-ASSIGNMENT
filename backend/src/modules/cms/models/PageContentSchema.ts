import { Schema, model } from "mongoose";
import { IPageContent } from "../types/IPageContent";

const PageContentSchema: Schema = new Schema({
  sectionId: { type: String, required: true, unique: true },
  content: { type: Object, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

export default model<IPageContent>("PageContent", PageContentSchema);

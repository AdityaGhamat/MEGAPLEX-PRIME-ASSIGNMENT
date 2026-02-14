import { Document } from "mongoose";
export interface IPageContent extends Document {
  sectionId: string;
  content: Record<string, any>;
  lastUpdated: Date;
}

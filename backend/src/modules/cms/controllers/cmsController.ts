import { Request, Response, NextFunction } from "express";
import PageContentSchema from "../models/PageContentSchema";

class CmsController {
  public getContent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const allContent = await PageContentSchema.find({});

      const formattedData = allContent.reduce((acc: any, curr) => {
        acc[curr.sectionId] = curr.content;
        return acc;
      }, {});

      res.status(200).json(formattedData);
    } catch (error) {
      next(error);
    }
  };

  public updateContent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { sectionId } = req.params;
      const newContent = req.body;

      const updatedSection = await PageContentSchema.findOneAndUpdate(
        { sectionId },
        { $set: { content: newContent, lastUpdated: new Date() } },
        { new: true, upsert: true }
      );

      res.status(200).json({ success: true, data: updatedSection });
    } catch (error) {
      next(error);
    }
  };

  public adminLogin = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      if (email === "admin@gmail.com" && password === "1234") {
        res.status(200).json({ success: true, token: "mock-jwt-token" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default new CmsController();

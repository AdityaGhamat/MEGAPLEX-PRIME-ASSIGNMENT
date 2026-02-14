import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import { errorMiddleware } from "./modules/core/middleware/errorMiddleware";
import { connectToDatabase } from "./modules/core/utils/connectDatabase";
import cmsRoutes from "./modules/cms/routes/cmsRoutes";
import authRoutes from "./modules/auth/routes/authRoutes";
class Server {
  private app: Express;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.errorMiddleware();
  }
  private middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  private routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        success: true,
        name: "Assignment",
      });
    });
    this.app.use("/api/cms", cmsRoutes);
    this.app.use("/api/auth", authRoutes);
  }
  private errorMiddleware() {
    this.app.use(errorMiddleware);
  }
  public async start(port: number) {
    await connectToDatabase();
    this.app.listen(port, "0.0.0.0", () => {
      console.log(`http://localhost:${port}`);
    });
  }
}
export default new Server();

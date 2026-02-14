import { Router } from "express";
import cmsController from "../controllers/cmsController";

const router = Router();

router.get("/content", cmsController.getContent);
router.put("/content/:sectionId", cmsController.updateContent);
router.post("/auth/login", cmsController.adminLogin);

export default router;

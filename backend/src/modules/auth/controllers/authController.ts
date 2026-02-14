import { Request, Response } from "express";

class AuthController {
  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      if (email === "admin@gmail.com" && password === "1234") {
        res.status(200).json({
          success: true,
          message: "Login successful",
          token: "admin-secret-token-123",
          user: {
            email: "admin@gmail.com",
            role: "admin",
          },
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
}

export default new AuthController();

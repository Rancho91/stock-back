import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const { PASS_JWT } = process.env;

interface Payload {
  _id: string;
  rol: string;
  iat: number;
  exp: number;
}

export const tokenValidation = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = _req.header("auth-token");
  try {
    if (!token) {
      res.status(400).json("Access deneid");
    } else {
      const payload = jwt.verify(
        token || "undefined",
        `${PASS_JWT}`
      ) as Payload;
      _req.userId = payload._id;
      _req.userRol = payload.rol;
      next();
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

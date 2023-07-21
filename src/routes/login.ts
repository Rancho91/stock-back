import jwt from "jsonwebtoken";
import { Router, Response, Request } from "express";
import { UserControllers } from "../controller/auth.token/auth.token";
import { Users } from "../models/user";


const { PASS_JWT } = process.env;
const router = Router();
const controller = new UserControllers();
router.post("/", async (_req: Request, res: Response) => {
  try {
    const user: Users = await controller.postUser(_req.body);
    const token: string = jwt.sign(
      { _id: user.id, rol: user.rol },
      `${PASS_JWT}`
    );
    res.header("auth-token", token).json(user);
  } catch (error) {
    res.status(400).json("usuario incorrecto");
  }
});
router.post("/validate", async (_req: Request, res: Response) => {
  try {
    const validate = await controller.getValidatePass(_req.body);
    if (validate) {
      const user: Users = await controller.getUser(_req.body);
      const token: string = jwt.sign({ id: user.id }, `${PASS_JWT}`);
      res.header("auth-token", token).json(user);
    } else {
      res.status(200).send("contraseña incorrecta");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

export { router };

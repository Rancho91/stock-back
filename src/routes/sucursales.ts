import { Router, Request, Response } from "express";
import { SucursalesController } from "../controller/Sucursales/SucursalController";
const controller = new SucursalesController();
const router = Router();
router.post("/", async (_req: Request, res: Response) => {
  try {
    await controller.createSucursal(_req.body);
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});

export { router };

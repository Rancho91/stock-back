import { Router, Request, Response } from "express";
import { MovimientosController } from "../controller/movimientos/MovimientosController";
const router = Router();
const controller = new MovimientosController();
import { tokenValidation } from "../utils/verifyToken";
router.use(tokenValidation)
router.post("/", async (_req: Request, res: Response) => {
  try {
    console.log(_req.body);
    await controller.createMovimientoLote(_req.body);
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await controller.updateMovimientoLote(_req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});
export { router };

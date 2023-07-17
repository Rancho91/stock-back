import { Router, Response, Request } from "express";
import { DepositoControllers } from "../controller/Sucursales/DepositosController";
const router = Router();

const controller = new DepositoControllers();

router.post("/", async (_req: Request, res: Response) => {
  try {
    await controller.createDeposito(_req.body);
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});
router.delete("/:id", async (_req: Request, res: Response) => {
  try {
    await controller.deleteDeposito(Number(_req.params));
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/", async (_req: Request, res: Response) => {
  try {
    await controller.updateDeposito(_req.body);
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});

export { router };

import { Router, Request, Response } from "express";
import { SucursalesController } from "../controller/Sucursales/SucursalController";
import { StockSucursalesController } from "../controller/Sucursales/stockSucursalController";
const controller = new SucursalesController();
const controllerStock = new StockSucursalesController();
const router = Router();
import { tokenValidation } from "../utils/verifyToken";
router.use(tokenValidation)
router.post("/", async (_req: Request, res: Response) => {
  try {
    await controller.createSucursal(_req.body);
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});
router.post("/stock", async (_req: Request, res: Response) => {
  try {
    await controllerStock.createStockSucursal(_req.body);
    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(controller.findAllSucursales());
  } catch (error) {}
});

router.delete("/:id", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(controller.deleteSucursal(Number(_req.params)));
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(controller.updateSucursalD(_req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

export { router };

import { Router, Request, Response } from "express";
import { LotesControllers } from "../controller/lotes/LotesController";
const router = Router();
const controller = new LotesControllers();
router.post("/", async (_req: Request, res: Response) => {
  try {
    await controller.createLote(_req.body);

    res.status(200).json("se creo el producto");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await controller.findAllLotes());
  } catch (error) {
    res.status(400).json(error);
  }
});
router.delete("/:id", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await controller.deleteLotes(Number(_req.params)));
  } catch (error) {
    res.status(400).json(error);
  }
});
router.put("/", async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await controller.updateLotes(_req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

export { router };

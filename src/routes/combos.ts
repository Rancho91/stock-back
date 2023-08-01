import { Router, Response, Request } from "express";
import { controllerCombos } from "../controller/combos/controllerCombos"; 
const router = Router();
import { tokenValidation } from "../utils/verifyToken";
router.use(tokenValidation);
const controller = new controllerCombos();
router.get("/", async (_req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async(_req: Request, res: Response) => {
  try {
    const response = await controller.createcombo(_req.body)
    res.status(200).json(response)

  } catch (error) {
    res.status(400).json(error)
  }
});

export { router };
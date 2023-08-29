import { Router, Response, Request } from "express";
import { consultaController } from "../controller/consultas/consultas";
const router = Router();
import { tokenValidation } from "../utils/verifyToken";
router.use(tokenValidation);
const controller = new consultaController();
router.get("/sucursal", async (_req: Request, res: Response) => {
  try {
    const response = await controller.stockConsulta(_req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/deposito", (_req: Request, res: Response) => {
  try {
    
  } catch (error) {
    res.status(400).json(error)
  }
});

router.get('/home',async (_req: Request, res: Response) =>{
  try {
    const response = await controller.homeInformatio()
    console.log(response)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error)
  }
} )

export { router };

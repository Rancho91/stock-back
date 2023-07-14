 import { Router, Response, Request } from "express";
 import { DepositoControllers } from "../controller/Sucursales/DepositosController";
 const router = Router()

const controller = new DepositoControllers

router.post('/', async(_req: Request, res : Response)=>{
    try {
        await controller.createDeposito(_req.body)
       res.status(200).json("se creo el producto")
    } catch (error) {
        res.status(400).json(error)
    }
} )

 export {router}
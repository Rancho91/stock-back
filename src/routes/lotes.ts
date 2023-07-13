import { Router, Request, Response } from "express";
import { LotesControllers } from "../controller/lotes/LotesController";
 const router = Router()
const  controller = new LotesControllers
 router.post('/',async(_req: Request, res : Response)=>{
    try {
       await controller.createLote(_req.body)
        
       res.status(200).json("se creo el producto")
    } catch (error) {
        res.status(400).json(error)
    }
} )

 export {router}
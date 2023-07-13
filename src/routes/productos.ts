import { Router, Request, Response } from "express";
import { ProductosControllers } from "../controller/Productos/ProductosController";

const router = Router()
const controller = new ProductosControllers
router.post('/',async (_req: Request, res : Response)=>{
    try {
        const {codigoInterno, description, codigosExternos} = _req.body 
       await controller.createProduct({codigoInterno, description,})
       await controller.createCodigos({codigoInterno,codigosExternos})
       res.status(200).json("se creo el producto")
    } catch (error) {
        res.status(400).json(error)
    }
} )



 export {router}
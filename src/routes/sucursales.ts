 import { Router, Request, Response } from "express";
 import { sequelize } from "../db";
 const router = Router()

 router.use('/',async(_req: Request, res : Response)=>{
    try {
        console.log(sequelize.models.Sucursales)
       const sucursal =  sequelize.models.Sucursales.build(_req.body)
        await sucursal.save()
       res.status(200).json("se creo el producto")
    } catch (error) {
        res.status(400).json(error)
    }
} )

 export {router}
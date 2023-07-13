import { sequelize } from "../../db";

export class LotesControllers {
  public async createLote({
    idDeposito,
    fechaIngreso,
    fechaVencimiento,
    cantidad,
    codProducto}: {
        idDeposito:number,
        fechaIngreso: string,
        fechaVencimiento: string,
        cantidad:number,
        codProducto: string
  }) {
    return await sequelize.models.Lotes.create({
        idDeposito,
        fechaIngreso,
        fechaVencimiento,
        cantidad,
        codProducto
    });
  }
 
}

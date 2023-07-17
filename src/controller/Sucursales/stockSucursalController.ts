import { sequelize } from "../../db";

export class StockSucursalesController {
  public async createStockSucursal({
    cantidad,
    idSucursal,
    codProducto,
  }: {
    cantidad: number;
    idSucursal: number;
    codProducto: string;
  }) {
    return await sequelize.models.StockSucursal.create({
      cantidad,
      idSucursal,
      codProducto,
    });
  }
}

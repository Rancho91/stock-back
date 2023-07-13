import { sequelize } from "../../db";

export class SucursalesController {
  public async createSucursal({
    descripcion,
    telefono,
    direccion,
  }: {
    descripcion: string;
    telefono: string;
    direccion: string;
  }) {
    return await sequelize.models.Sucursales.create({
      descripcion,
      telefono,
      direccion,
    });
  }
}

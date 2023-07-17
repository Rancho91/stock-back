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

  public async findAllSucursales() {
    return await sequelize.models.Sucursales.findAll();
  }
  public async updateSucursalD({
    deposito,
    id,
  }: {
    deposito: object;
    id: number;
  }) {
    return await sequelize.models.Deposito.update(
      {
        deposito,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }
  public async deleteSucursal(id: number) {
    return await sequelize.models.Deposito.update(
      {
        delete: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }
}

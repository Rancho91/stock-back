import { sequelize } from "../../db";

export class ProductosControllers {
  public async createProduct({
    codigoInterno,
    description,
  }: {
    codigoInterno: string;
    description: string;
  }) {
    return await sequelize.models.Productos.create({
      codigoInterno,
      description: description,
    });
  }
  public async createCodigos({
    codigosExternos,
    codigoInterno,
  }: {
    codigosExternos: [string];
    codigoInterno: string;
  }) {
    console.log(codigosExternos);
    codigosExternos.map(async (codigoExterno) => {
      await sequelize.models.Codigos.create({ codigoExterno, codigoInterno });
    });
  }
}

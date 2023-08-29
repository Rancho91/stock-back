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

  public async findAllProduct() {
    return sequelize.models.Productos.findAll({
      include: [
        {
          model: sequelize.models.Codigos,
          as: "codigos", 
        },
      ],
    });
  }

  public async updateProducto({
    product,
    id,
  }: {
    product: object;
    id: string;
  }) {
    return await sequelize.models.Productos.update(
      {
        product,
      },
      {
        where: {
          id,
        },
      }
    );
  }
  public async updateCodigoExterno({
    codigo,
    id,
  }: {
    codigo: object;
    id: number;
  }) {
    return await sequelize.models.Codigos.update(
      {
        codigo,
      },
      {
        where: {
          id,
        },
      }
    );
  }
  
  public async deleteProducto(id: number) {
    return await sequelize.models.Codigos.update(
      {
        delete: true,
      },
      {
        where: {
          id,
        },
      }
    );
  }
}

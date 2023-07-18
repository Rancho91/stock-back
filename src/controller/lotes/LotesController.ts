import { sequelize } from "../../db";
export class LotesControllers {
  public async createLote({
    idDeposito,
    fechaIngreso,
    fechaVencimiento,
    cantidad,
    codProducto,
  }: {
    idDeposito: number;
    fechaIngreso: string;
    fechaVencimiento: string;
    cantidad: number;
    codProducto: string;
  }) {
    return await sequelize.models.Lotes.create({
      idDeposito,
      fechaIngreso,
      fechaVencimiento,
      cantidad,
      codProducto,
      stock: cantidad,
    });
  }

  public async findAllLotes() {
    return await sequelize.models.Lotes.findAll();
  }

  public async updateLotes({ lotes, id }: { lotes: Object; id: number }) {
    return await sequelize.models.Lotes.update(
      {
        lotes,
      },
      {
        where: {
          id,
        },
      }
    );
  }
  public async deleteLotes(id: number) {
    return await sequelize.models.Lotes.update(
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
  public async findOneLote (id:number){
    try {
      const response  = await sequelize.models.Lotes.findOne({where:{id}})
      return response

    } catch (error) {
      return error
    }
  }
}

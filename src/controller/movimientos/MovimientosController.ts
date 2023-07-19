import { sequelize } from "../../db";
// import { LotesControllers } from "../lotes/LotesController";
import { Lotes } from "../../utils/lotes";
export class MovimientosController {
  public async createMovimientoLote({
    idLote,
    entradaSalida,
    fechaMovimiento,
    detalle,
    tipoSalida,
  }: {
    idLote: number;
    entradaSalida: boolean;
    fechaMovimiento: string;
    detalle: [];
    tipoSalida: string;
  }) {
    const t = await sequelize.transaction();
    const responseModel = await sequelize.models.Lotes.findOne({
      where: { id: idLote },
      attributes: ["cantidad"],
    });
    let cantidadLote: number;
    if (responseModel) {
      const response = responseModel.dataValues as Lotes;
      cantidadLote = response.cantidad;
    } else {
      cantidadLote = -1;
    }

    try {
      const response = await sequelize.models.MovimientoLotes.create(
        {
          idLote,
          entradaSalida,
          fechaMovimiento,
          tipoSalida,
        },
        { transaction: t }
      );
      detalle.map(async (det) => {
        const { cantidad, idSucursal } = det;
        await sequelize.models.DetalleMovimiento.create(
          {
            cantidad,
            idSucursal,
            idMovimiento: response.dataValues.id,
          },
          { transaction: t }
        );
        cantidadLote = cantidadLote - cantidad;

        await t.commit();
        await sequelize.models.Lotes.update(
          {
            cantidad: cantidadLote,
          },
          { where: { id: idLote } }
        );
      });
      return "se realizo el movimiento de forma correcta";
    } catch (error) {
      await t.rollback();
      throw new Error("no se creo el movimiento");
    }
  }

  public async updateMovimientoLote({
    movimiento,
    detalle,
    id,
  }: {
    movimiento: Object;
    detalle: [];
    id: number;
  }) {
    detalle?.map(async (det) => {
      const { id } = det;
      await sequelize.models.DetalleMovimiento.update(
        {
          det,
        },
        {
          where: {
            id,
          },
        }
      );
    });
    return await sequelize.models.MovimientoLotes.update(
      {
        movimiento,
      },
      {
        where: {
          id,
        },
      }
    );
  }

  public async findLastId() {
    interface id {
      id: number;
    }
    const result = await sequelize.models.movimiento.findOne({
      attributes: [[sequelize.fn("max", sequelize.col("id")), "id"]],
    });
    let resultId: id | null;
    if (result) {
      resultId = result.dataValues as id;
    } else {
      resultId = null;
    }
    let cantidad: number | null;
    resultId ? (cantidad = resultId.id) : (cantidad = null);
    return cantidad;
  }
}

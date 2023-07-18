import { sequelize } from "../../db";
// import { LotesControllers } from "../lotes/LotesController";
import { Lotes } from "../../utils/lotes";
export async function createMovimientoLote({
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
      console.log(response);

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
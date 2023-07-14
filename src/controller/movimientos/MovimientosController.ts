import { sequelize } from "../../db";

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
    detalle.map(async (det) => {
      const { cantidad, idSucursal, idMovimiento } = det;
      await sequelize.models.DetalleMovimiento.create({
        cantidad,
        idSucursal,
        idMovimiento,
      });
    });
    return await sequelize.models.MovimientoLotes.create({
      idLote,
      entradaSalida,
      fechaMovimiento,
      tipoSalida,
    });
  }
}

import { sequelize } from "../../db";

export class MovimientosController {
  public async createMovimientoLote({
    idLote,
    entradaSalida,
    fechaMovimiento,
    tipoSalida
  }: {
    idLote: number,
    entradaSalida: boolean,
    fechaMovimiento: string,
    tipoSalida: string
  }) {
    return await sequelize.models.MovimientoLotes.create({
      idLote,
      entradaSalida,
      fechaMovimiento,
      tipoSalida
    });
  }
}

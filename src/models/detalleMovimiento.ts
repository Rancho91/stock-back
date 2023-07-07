import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import { MovimientoLotes } from "./movimientoLote";
import { Sucursales } from "./sucursales";

@Table({ tableName: "detalleMovimiento", timestamps: false })
export class DetalleMovimiento extends Model {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;
  @Column({
    field: "cantidad",
    type: DataType.INTEGER,
  })
  cantidad!: number;

  @ForeignKey(() => Sucursales)
  @Column({
    field: "id_sucursal",
    type: DataType.INTEGER,
  })
  idSucursal!: number;
  @BelongsTo(() => Sucursales)
  sucursal!: Sucursales;

  @ForeignKey(() => MovimientoLotes)
  @Column({
    field: "id_movimiento",
    type: DataType.INTEGER,
  })
  MovimientoLotes!: number;
  @BelongsTo(() => MovimientoLotes)
  movimientoLotes!: MovimientoLotes;
}
export default DetalleMovimiento;

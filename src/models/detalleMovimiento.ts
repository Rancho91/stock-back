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
export class DetalleMovimiento extends Model<DetalleMovimiento> {
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
    field: "idSucursal",
    type: DataType.INTEGER,
  })
  idSucursal!: number;
  @BelongsTo(() => Sucursales)
  sucursal!: Sucursales;

  @ForeignKey(() => MovimientoLotes)
  @Column({
    field: "idMovimiento",
    type: DataType.INTEGER,
  })
  idMovimiento!: number;
  @BelongsTo(() => MovimientoLotes)
  movimientoLotes!: MovimientoLotes;
}
export default DetalleMovimiento;

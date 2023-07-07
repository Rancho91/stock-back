import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import { Lotes } from "./lotes";
import { DetalleMovimiento } from "./detalleMovimiento";

enum TipoSalidaEnum {
  Sucursal = "Sucursal",
  Accidentes = "Accidentes",
  Vencimiento = "Vencimiento",
  Otros = "Otros",
}

@Table({ tableName: "movimoientos", timestamps: false })
export class MovimientoLotes extends Model {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  tipoMovId!: number;

  @ForeignKey(() => Lotes)
  @Column({
    field: "id_lote",
    type: DataType.INTEGER,
    allowNull: true,
  })
  idDeposito!: number;
  @BelongsTo(() => Lotes)
  deposito!: Lotes;

  @Column({
    field: "entrada_salida",
    type: DataType.BOOLEAN,
  })
  entradaSalida!: boolean;

  // Relación con la tabla Sucursales
  @Column({
    field: "fecha_movimiento",
    type: DataType.DATE,
  })
  fechaMovimiento!: Date;

  @Column({
    field: "tipo_salida",
    type: DataType.ENUM(...Object.values(TipoSalidaEnum)),
  })
  tipoSalida!: TipoSalidaEnum;

  @HasMany(() => DetalleMovimiento)
  detalleMovimiento?: DetalleMovimiento[];
}

export default MovimientoLotes;

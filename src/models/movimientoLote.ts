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

@Table({ tableName: "movimientos", timestamps: false })
export class MovimientoLotes extends Model<MovimientoLotes> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Lotes)
  @Column({
    field: "idLote",
    type: DataType.INTEGER,
    allowNull: true,
  })
  idLote!: number;
  @BelongsTo(() => Lotes)
  deposito!: Lotes;

  @Column({
    field: "entradaSalida",
    type: DataType.BOOLEAN,
    //true:entrada, False:salida
  })
  entradaSalida!: boolean;

  // Relación con la tabla Sucursales
  @Column({
    field: "fechaMovimiento",
    type: DataType.DATE,
  })
  fechaMovimiento!: Date;

  @Column({
    field: "tipoSalida",
    type: DataType.ENUM(...Object.values(TipoSalidaEnum)),
  })
  tipoSalida!: TipoSalidaEnum;

  @HasMany(() => DetalleMovimiento)
  detalleMovimiento?: DetalleMovimiento[];
}

export default MovimientoLotes;

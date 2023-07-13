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
import { DetalleSalidaProducto } from "./detalleSalidaProductos";
import { Sucursales } from "./sucursales";
enum TipoSalidaEnum {
  Sucursal = "Traspaso",
  Accidentes = "Rotura",
  Vencimiento = "Vencimiento",
  Otros = "Otros",
}
@Table({ tableName: "salidas_productos", timestamps: false })
export class SalidasProductos extends Model<SalidasProductos> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    field: "fecha_salida",
    type: DataType.DATE,
  })
  fechaSalida!: Date;

  @Column({
    field: "tipo_salida",
    type: DataType.ENUM(...Object.values(TipoSalidaEnum)),
  })
  tipoSalida!: TipoSalidaEnum;

  @ForeignKey(() => Sucursales)
  @Column({
    field: "id_sucursal",
    type: DataType.INTEGER,
  })
  codSucursal!: number;

  @BelongsTo(() => Sucursales)
  producto!: Sucursales;

  @HasMany(() => DetalleSalidaProducto)
  detalleSalidaProducto!: DetalleSalidaProducto[];
}

export default SalidasProductos;

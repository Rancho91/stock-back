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
import TipoSalida from "./tipoSalidas";

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
    field: "fechaSalida",
    type: DataType.DATE,
  })
  fechaSalida!: Date;


  @ForeignKey(() => TipoSalida)
  @Column({
    field: "idTipoSalida",
    type: DataType.INTEGER,
  })
  idTipoSalida!: number;


  @ForeignKey(() => Sucursales)
  @Column({
    field: "idSucursal",
    type: DataType.INTEGER,
  })
  idSucursal!: number;

  @BelongsTo(() => Sucursales)
  sucursales!: Sucursales;
  
  @BelongsTo(() => TipoSalida)
  tipoSalida!: TipoSalida;

  @HasMany(() => DetalleSalidaProducto)
  detalleSalidaProducto!: DetalleSalidaProducto[];
}

export default SalidasProductos;

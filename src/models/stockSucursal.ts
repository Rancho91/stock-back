import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Sucursales from "./sucursales";
import Productos from "./productos";

@Table({ tableName: "stockSucursal", timestamps: false })
export class StockSucursal extends Model<StockSucursal> {
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
    allowNull: true,
  })
  cantidad!: number;

  @ForeignKey(() => Sucursales)
  @Column({
    field: "idSucursal",
    type: DataType.INTEGER,
  })
  idSucursal!: number;

  @BelongsTo(() => Sucursales)
  sucursales!: Sucursales;
  @ForeignKey(() => Productos)
  @Column({
    field: "codProducto",
    type: DataType.STRING,
  })
  codProducto!: string;

  @BelongsTo(() => Productos)
  producto!: Productos;

  @Column({
    field: "descripcion",
    type: DataType.STRING,
  })
  descripcion!: string;
}

export default StockSucursal;

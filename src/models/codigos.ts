import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import Productos from "./productos";

@Table({ tableName: "CodigosExternos", timestamps: false })
export class Codigos extends Model {
  @PrimaryKey
  @Column({
    field: "codigo",
    type: DataType.STRING,
  })
  Codigo!: string;

  @ForeignKey(() => Productos)
  @Column({
    field: "cod_producto_interno",
    type: DataType.INTEGER,
  })
  codigoProducto!: number;
  @BelongsTo(() => Productos)
  producto!: Productos;
}

export default Codigos;

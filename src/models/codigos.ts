import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import {Productos} from "./productos";

@Table({ tableName: "CodigosExternos", timestamps: false })
export class Codigos extends Model {
  @PrimaryKey
  @Column({
    field: "codigo_externo",
    type: DataType.STRING,
  })
  Codigo!: string;

  @ForeignKey(() => Productos)
  @Column({
    field: "cod_producto",
    type: DataType.STRING,
  })
  codProducto!: string;
  @BelongsTo(() => Productos)
  productos?: Productos;
}

export default Codigos;

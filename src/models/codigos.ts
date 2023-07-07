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
    field: "codigoExterno",
    type: DataType.STRING,
  })
  Codigo!: string;

  @ForeignKey(() => Productos)
  @Column({
    field: "codigoInterno",
    type: DataType.STRING,
  })
  codProducto!: string;
  @BelongsTo(() => Productos)
  productos?: Productos;
}

export default Codigos;

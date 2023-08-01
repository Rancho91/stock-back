import {
  Model,
  Column,
  Table,
  DataType,
  BelongsTo,
  PrimaryKey,
} from "sequelize-typescript";

import { Productos } from "./productos";

@Table({ tableName: "unidadMedidas", timestamps: false })
export class UnidadMedida extends Model<UnidadMedida> {
  @PrimaryKey
  @Column({
    field: "id",
    allowNull: false,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    field: "description",
    type: DataType.STRING,
  })
  description!: string;

  @BelongsTo(() => Productos, { foreignKey: "codigoInterno" })
  productos?: Productos;
}

export default UnidadMedida;

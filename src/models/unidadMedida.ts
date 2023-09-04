import {
  Model,
  Column,
  Table,
  DataType,
  
  PrimaryKey,
  HasMany,
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

  @HasMany(() => Productos)
  productos?: Productos;
}

export default UnidadMedida;

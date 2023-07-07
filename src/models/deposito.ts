import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { Lotes } from "./lotes";

@Table({
  tableName: "depositos",
  timestamps: false,
})
export class Deposito extends Model {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    allowNull: false, // La columna name no puede contener valores nulos
  })
  name!: number;

  @Column({
    field: "description",
    type: DataType.STRING,
    allowNull: true, // La columna price puede contener valores nulos
  })
  price?: string;

  @HasMany(() => Lotes)
  lotes?: Lotes[];
}

export default Deposito;
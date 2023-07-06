import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import Lotes from "./lotes";

@Table({ tableName: "lotes", timestamps: false })
export class Productos extends Model {
  @PrimaryKey
  @Column({
    field: "producto_code",
    type: DataType.STRING,
  })
  codigo!: string;
  @Column({
    field: "producto_description",
    type: DataType.STRING,
  })
  description!: string;

  @HasMany(() => Lotes)
  lotes?: Lotes[];
}

export default Productos;

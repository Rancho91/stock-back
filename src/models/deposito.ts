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
export class Deposito extends Model<Deposito> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    field: "descripcion",
    type: DataType.STRING,
    allowNull: true, // La columna price puede contener valores nulos
  })
  descripcion?: string;
  @Column({
    field: "telefono",
    type: DataType.STRING,
  })
  telefono!: string;
  
  @Column({
    field: "email",
    type: DataType.STRING,
  })
  email!: string;
  @Column({
    field: "delete",
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  delete!: boolean;
  
  @HasMany(() => Lotes)
  lotes?: Lotes[];
}

export default Deposito;

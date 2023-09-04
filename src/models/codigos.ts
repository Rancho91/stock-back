import {
  Model,
  Column,
  Table,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";


import {Productos} from "./productos";

@Table({ tableName: "codigos", timestamps: false })
export class Codigos extends Model<Codigos> {

  @Column({
    field: "codigoExterno",
    type: DataType.STRING,
    unique:true,
  })
  codigoExterno!: string;

  @ForeignKey(() => Productos)
  @Column({
    field: "codigoInterno",
    type: DataType.STRING,
  })
  codigoInterno!: string;
  
  @BelongsTo(() => Productos, { foreignKey: "codigoInterno" })
  productos?: Productos;
  
}

export default Codigos;

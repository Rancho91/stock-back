import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import { Deposito } from "./deposito";
import Productos from "./productos";
import { MovimientoLotes } from "./movimientoLote";

@Table({ tableName: "lotes", timestamps: false })
export class Lotes extends Model<Lotes> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  //relacion con la tabla Deposito
  @ForeignKey(() => Deposito)
  @Column({
    field: "idDeposito",
    type: DataType.INTEGER,
    allowNull: true,
  })
  idDeposito!: number;
  @BelongsTo(() => Deposito)
  deposito!: Deposito;

  @Column({
    field: "fechaIngreso",
    type: DataType.DATE,
  })
  fechaIngreso!: Date;

  @Column({
    field: "fechaVencimiento",
    type: DataType.DATE,
  })
  fechaVencimiento!: Date;
  @Column({
    field: "cantidad",
    type: DataType.DECIMAL,
  })
  cantidad!: number;
  @Column({
    field: "stock",
    type: DataType.INTEGER,
  })
  stock!: number;

  @ForeignKey(() => Productos)
  @Column({
    field: "codigoInterno",
    type: DataType.STRING,
  })
  codigoInterno!: string;
  @BelongsTo(() => Productos, { foreignKey: "codigoInterno" })
  producto!: Productos;


  @Column({
    field: "delete",
    type: DataType.BOOLEAN,
  })
  delete!: boolean;
  @HasMany(() => MovimientoLotes)
  moviniemtoLotes!: MovimientoLotes[];
}

export default Lotes;

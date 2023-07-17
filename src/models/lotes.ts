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
  fechaIngreso!: string;

  @Column({
    field: "fechaVencimiento",
    type: DataType.DATE,
  })
  fechaVencimiento!: string;
  @Column({
    field: "cantidad",
    type: DataType.INTEGER,
  })
  cantidad!: number;
  @Column({
    field: "stock",
    type: DataType.INTEGER,
  })
  stock!: number;

  @ForeignKey(() => Productos)
  @Column({
    field: "codProducto",
    type: DataType.STRING,
  })
  codProducto!: string;
  @BelongsTo(() => Productos)
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

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
import { Productos } from "./productos";
import { MovimientoLotes } from "./movimientoLote";

@Table({ tableName: "lotes", timestamps: false })
export class Lotes extends Model {
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
    field: "id_deposiito",
    type: DataType.INTEGER,
    allowNull: true,
  })
  idDeposito!: number;
  @BelongsTo(() => Deposito)
  deposito!: Deposito;

  @Column({
    field: "fecha_vencimiento",
    type: DataType.DATE,
  })
  fechaVencimiento!: string;
  @Column({
    field: "cantidad",
    type: DataType.INTEGER,
  })
  cantidad!: number;

  @ForeignKey(() => Productos)
  @Column({
    field: "cod_producto",
    type: DataType.INTEGER,
  })
  codProducto!: number;
  @BelongsTo(() => Productos)
  producto!: Productos;

  @HasMany(() => MovimientoLotes)
  moviniemtoLotes!: MovimientoLotes[];
}

export default Lotes;

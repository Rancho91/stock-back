import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Combos from "./combos";
import Productos from "./productos";
@Table({ tableName: "comboProducto", timestamps: false })
export class CombosProductos extends Model<CombosProductos> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Productos)
  @Column({
    field: "idProducto",
    type: DataType.STRING,
  })
  idProducto!: string;
  @BelongsTo(() => Productos)
  Productos!: Productos;

  @Column({
    field: "cantidad",
    type: DataType.INTEGER,
  })
  cantiudad!: number;
  
  @ForeignKey(() => Combos)
  @Column({
    field: "idCombo",
    type: DataType.STRING,
  })
  idCombo!: string;
  @BelongsTo(() => Combos)
  Combos!: Combos;

  @Column({
    field: "delete",
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  delete!: boolean;
}

export default CombosProductos;

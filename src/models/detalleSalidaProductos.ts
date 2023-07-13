import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import { Productos } from "./productos";
import { SalidasProductos } from "./salidasProductos";

@Table({ tableName: "detalleSaliodaProducto", timestamps: false })
export class DetalleSalidaProducto extends Model<DetalleSalidaProducto> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Productos)
  @Column({
    field: "codProducto",
    type: DataType.STRING,
  })
  codProducto!: string;
  @BelongsTo(() => Productos)
  productos!: Productos;

  @Column({
    field: "cantidad",
    type: DataType.INTEGER,
  })
  cantidad!: number;

  @ForeignKey(() => SalidasProductos)
  @Column({
    field: "idSalidaProducto",
    type: DataType.INTEGER,
  })
  idSalidaProducto!: number;
  @BelongsTo(() => SalidasProductos)
  salidasProductos!: SalidasProductos;
}

export default DetalleSalidaProducto;

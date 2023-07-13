import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { Lotes } from "./lotes";
import { DetalleSalidaProducto } from "./detalleSalidaProductos";
import  {Codigos}  from "./codigos";
@Table({ tableName: "productos", timestamps: false })
export class Productos extends Model<Productos> {
  @PrimaryKey
  @Column({
    field: "codigoInterno",
    type: DataType.STRING,
  })
  codigoInterno!: string;

  @Column({
    field: "description",
    type: DataType.STRING,
  })
  description!: string;

  @HasMany(() => Lotes)
  lotes?: Lotes[];

  @HasMany(() => DetalleSalidaProducto)
  salidasProductos?: DetalleSalidaProducto[];

  @HasMany(() => Codigos, { foreignKey: "codigoInterno" })
  codigos?: Codigos[];
}

export default Productos;

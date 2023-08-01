import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Lotes } from "./lotes";
import { DetalleSalidaProducto } from "./detalleSalidaProductos";
import { Codigos } from "./codigos";
import {UnidadMedida} from "./unidadMedida";
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

  @Column({
    field: "delete",
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  delete!: boolean;
  
  @ForeignKey(() => UnidadMedida)
  @Column({
    field: "idUnidadMedida",
    type: DataType.INTEGER,
    allowNull: true,
  })
  idUnidadMedida!: number;
  @BelongsTo(() => UnidadMedida)
  unidadMedida!: UnidadMedida;

  @HasMany(() => Lotes)
  lotes?: Lotes[];

  @HasMany(() => DetalleSalidaProducto)
  salidasProductos?: DetalleSalidaProducto[];

  @HasMany(() => Codigos, { foreignKey: "codigoInterno" })
  codigos?: Codigos[];
}

export default Productos;

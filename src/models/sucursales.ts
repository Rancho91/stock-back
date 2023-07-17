import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import { SalidasProductos } from "./salidasProductos";
import { DetalleMovimiento } from "./detalleMovimiento";
import {StockSucursal} from "./stockSucursal";
@Table({ tableName: "sucursales", timestamps: false })
export class Sucursales extends Model<Sucursales> {
  @PrimaryKey
  @Column({
    field: "id",
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  //relacion con la tabla Deposito

  @Column({
    field: "direccion",
    type: DataType.STRING,
    allowNull: true,
  })
  direccion!: string;

  @Column({
    field: "telefono",
    type: DataType.STRING,
  })
  telefono!: string;

  @Column({
    field: "descripcion",
    type: DataType.STRING,
  })
  descripcion!: string;
  @Column({
    field: "delete",
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  delete!: boolean;
  

  @HasMany(() => DetalleMovimiento)
  detalleMovimiento?: DetalleMovimiento[];

  @HasMany(() => SalidasProductos)
  salidasProductos?: SalidasProductos[];
  @HasMany(()=> StockSucursal)
  StockSucursal? : StockSucursal[]
}

export default Sucursales;

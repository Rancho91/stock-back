import {
    Model,
    Column,
    Table,
    DataType,
    PrimaryKey,
    HasMany,    
  } from "sequelize-typescript";
  import { DetalleSalidaProducto } from "./detalleSalidaProductos";
  @Table({ tableName: "combos", timestamps: false })
  export class Combos extends Model<Combos> {
    @PrimaryKey
    @Column({
      field: "codigoInterno",
      type: DataType.STRING,
    })
    codigoInterno!: string;
  
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
  
    @HasMany(() => DetalleSalidaProducto)
    salidasProductos?: DetalleSalidaProducto[];
  }
  
  export default Combos;
  
import {
    Model,
    Column,
    Table,
    DataType,
    PrimaryKey,
    HasMany,
} from "sequelize-typescript";
import { SalidasProductos } from "./salidasProductos";
import MovimientoLotes from "./movimientoLote";
@Table({ tableName: "tipos_Salidas", timestamps: false })
export class TipoSalida extends Model<TipoSalida> {
    @PrimaryKey
    @Column({
        field: "id",
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    id!: number;


    @Column({
        field: "tipo",
        type: DataType.STRING,
        allowNull: true,
    })
    tipo!: string;

    @HasMany(() => MovimientoLotes)
    movimientoLotes?: MovimientoLotes[];

    @HasMany(() => SalidasProductos)
    salidasProductos?: SalidasProductos[];

}

export default TipoSalida;
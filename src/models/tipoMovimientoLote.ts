import { Model, Column, Table, DataType, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Lotes } from './lotes';
import { Sucursales } from './sucursales';

enum TipoSalidaEnum {
  Sucursal = 'Sucursal',
  Accidentes = 'Accidentes',
  Vencimiento = 'Vencimiento',
  Otros = 'Otros',
}

@Table({ tableName: 'tipoMovimoiento', timestamps: false })
export class TipoMovimientoLotes extends Model {
  @PrimaryKey
  @Column({
    field: 'movimiento_ID',
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  tipoMovId!: number;

  // Relación con la tabla Lotes
  @ForeignKey(() => Lotes)
  @Column({
    field: 'id_lote',
    type: DataType.INTEGER,
    allowNull: true,
  })
  idDeposito!: number;
  @BelongsTo(() => Lotes)
  deposito!: Lotes;

  @Column({
    field: 'entrada_salida',
    type: DataType.BOOLEAN,
  })
  entradaSalida!: boolean;

  // Relación con la tabla Sucursales
  @ForeignKey(() => Sucursales)
  @Column({
    field: 'cod_producto',
    type: DataType.INTEGER,
  })
  codProducto!: number;
  @BelongsTo(() => Sucursales)
  producto!: Sucursales;

  @Column({
    field: 'fecha_movimiento',
    type: DataType.DATE,
  })
  fechaMovimiento!: Date;

  @Column({
    field: 'tipo_salida',
    type: DataType.ENUM(...Object.values(TipoSalidaEnum)),
  })
  tipoSalida!: TipoSalidaEnum;
}
  
  export default TipoMovimientoLotes;
  
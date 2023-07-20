
import {
    Model,
    Column,
    Table,
    DataType,
    PrimaryKey,
  } from "sequelize-typescript";

  enum TipoRol{
    Sucursal = "Dev",
    Accidentes = "Admin",
    Vencimiento = "User",
  }
  @Table({ tableName: "users", timestamps: false })
  export class Users extends Model<Users> {
    @PrimaryKey
    @Column({
      field: "id",
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    id!: string;
  
  
    @Column({
      field: "password",
      type: DataType.STRING,
      allowNull: true,
    })
    password!: string;

    @Column({
      field: "email",
      type: DataType.STRING,
    })
    email!: string;
    @Column({
      field: "delete",
      type: DataType.BOOLEAN,
      defaultValue: false,
    })
    delete!: boolean;
    
    @Column({
        field:"rol",
        type: DataType.ENUM(...Object.values(TipoRol)),
        defaultValue: "User"
    })
    rol!:string

  }
  
  export default Users;
  
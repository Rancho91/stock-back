import { sequelize } from "../../db";
// import {CombosProductos} from "../../models/comboProducto"
// import {Productos} from "../../models/productos"
export class SalidaController {
  private async consultarCodigo(codigoInterno: string) {
    const product = await sequelize.models.Productos.findOne({
      where: { codigoInterno: codigoInterno },
    });
    if (product) return product;
    else return false;
  }

  private async descuentoProductos({
    codigoInterno,
    cantidad,
    idSucursal,
  }: {
    codigoInterno: string;
    cantidad: number;
    idSucursal: number;
  }) {
    const t = await sequelize.transaction();
    try {
      const product = await this.consultarCodigo(codigoInterno);
      if (product) {
        let stock = await sequelize.models.StockSucursal.findOne({
          where: {
            idSucursal: idSucursal,
            codProducto: codigoInterno,
          },
        });
        console.log(stock);
        await sequelize.models.StockSucursal.update(
          { cantidad: stock?.dataValues.cantidad - cantidad },
          {
            where: {
              idSucursal: idSucursal,
              codProducto: codigoInterno,
            },
            transaction: t,
          }
        );
      } else {
        const listProduct = await sequelize.models.CombosProductos.findAll({
          where: {
            idCombo: codigoInterno,
          },
          transaction: t,
        });
        console.log(listProduct);
        for (const prod of listProduct) {
          const cant = prod.dataValues.cantidad;
          const stock = await sequelize.models.StockSucursal.findOne({
            where: {
              idSucursal: idSucursal,
              codProducto: prod.dataValues.idProducto,
            },
            transaction: t,
          });

          await sequelize.models.StockSucursal.update(
            { cantidad: stock?.dataValues.cantidad - cantidad * cant },
            {
              where: {
                idSucursal: idSucursal,
                codProducto: prod.dataValues.idProducto,
              },
              transaction: t,
            }
          );
        }
      }
      await t.commit();
      return true;
    } catch (error) {
      await t.rollback();
      return false;
    }
  }

  public async createSalida({
    idSucursal,
    tipoSalida,
    productos,
  }: {
    idSucursal: number;
    tipoSalida: string;
    productos: [{ codigoInterno: string; cantidad: number }];
  }) {
    const t = await sequelize.transaction();
    try {
      for (const prod of productos) {
        const { codigoInterno, cantidad } = prod;
        const discount = await this.descuentoProductos({
          idSucursal,
          codigoInterno,
          cantidad,
        });
        if (discount) {
          const fecha = new Date();
          const salida = await sequelize.models.SalidasProductos.create(
            { fechaSalida: fecha, tipoSalida, idSucursal },
            { transaction: t }
          );
          await sequelize.models.DetalleSalidaProducto.create(
            {
              codProducto: codigoInterno,
              cantidad,
              idSalidaProducto: salida.dataValues.id,
            },
            { transaction: t }
          );
        }
      }
      await t.commit();
      return "se creo la salida de forma correcta";
    } catch (error) {
      await t.rollback();
      return error;
    }
  }
}

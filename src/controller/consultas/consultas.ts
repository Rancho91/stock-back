import { sequelize } from "../../db";
import Lotes from "../../models/lotes";
import Productos from "../../models/productos";
import { Op } from "sequelize";
export class consultaController {
  public stockConsulta({
    id,
    description,
    // cantidad,
    // mayor,
  }: {
    id: number;
    description: string;
    // cantidad: number;
    // mayor: boolean;
  }) {
    // const cantidadCondition = this.whereCantidad(cantidad, mayor);

    const sucrusalStock = sequelize.models.StockSucursal.findAll({
      where: {
        idSucursal: id,
        cantidad: 1,
      },
      include: [
        {
          model: sequelize.models.Productos,
          attributes: ["codigoInterno", "description"],
          where: {
            description: {
              [Op.like]: `%${description}%`,
            },
          },
        },
      ],
    });
    return sucrusalStock;
  }

  public async depositoConsulta({
    id,
    description,
    cantidad,
    stock,
    mayorCantidad,
    mayorStock,
  }: // fechaVencimiento,
    // fechaIngreso
    {
      id: number;
      description: string;
      cantidad: number;
      stock: number;
      mayorCantidad: boolean;
      mayorStock: boolean;
      // fechaVencimiento: Date;
      // fechaIngreso:Date;
    }) {
    const cantidadCondition = this.whereCantidad(cantidad, mayorCantidad);
    const cantidadStock = this.whereCantidad(stock, mayorStock);

    const response = await sequelize.models.Lotes.findAll({
      where: {
        idDeposito: id,
      },

      include: [
        {
          model: Lotes,
          attributes: ["cantidad", "stock", "fechaVencimiento", "fechaIngreso"],
          where: {
            cantidadCondition,
            cantidadStock,
          },
          include: [
            {
              model: Productos,
              where: {
                description: {
                  [Op.like]: `%${description}%`,
                },
              },
            },
          ],
        },
      ],
    });
    return response;
  }

  private whereCantidad(cantidad: number, mayor: boolean) {
    let cantidadCondition: Object = {};
    if (!cantidad) {
      if (mayor) {
        cantidadCondition = {
          [Op.gt]: cantidad,
        };
      } else {
        cantidadCondition = {
          [Op.lt]: cantidad,
        };
      }
    }
    return cantidadCondition;
  }

  public async homeInformatio() {

    const cantProducto = await sequelize.models.Productos.findAll({
      attributes: [[sequelize.fn('COUNT', sequelize.col('codigoInterno')), 'cantidad'],]
    })

    const maxDateIngreso = await sequelize.models.MovimientoLotes.findAll({
      attributes: [[sequelize.fn('MAX', sequelize.col('fechaMovimiento')), 'ingreso'],'tipoSalida',],
      include: [
                {
                  model: sequelize.models.TipoSalida,
                  where: {
                    tipo: "sucursal"
                  },
                  attributes: []
                  
                },

              ],
              group: ['tipoSalida'], // Agrupar por tipoSalida

    })

    const maxDateTraspaso = await sequelize.models.SalidasProductos.findAll({
      attributes: [[sequelize.fn('MAX', sequelize.col('fechaSalida')), 'UltimoTraspaso'], 'idTipoSalida'],
      include: [
        
          {
            model: sequelize.models.TipoSalida,
            where: {
              tipo: "traspaso"
            },
            attributes: []
            
          }

      ],
      group: ['idTipoSalida'],   
     })
  
    return { cantProducto, maxDateIngreso, maxDateTraspaso }
  }
}

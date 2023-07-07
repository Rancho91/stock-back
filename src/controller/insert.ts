import { sequelize } from "../db";
import Productos from "../models/productos";
import Codigos from "../models/codigos";
import {
  ProductoInterface,
  CodigosExternosType,
} from "../routes/types/products";
const productoRepository = sequelize.getRepository(Productos);
const codigoExternoRepository = sequelize.getRepository(Codigos);

const postProduct = async (producto: ProductoInterface) => {
  const { codigoInterno, descripcion, codigosExternos } = producto;
   await productoRepository.create({
    codigoInterno,
    descripcion,
  });

  codigosExternos.forEach(async (elem: CodigosExternosType) => {
    await codigoExternoRepository.create({ codigoExterno: elem, codigoInterno });
  });
  return `se ingreso el producto ${producto.descripcion} de forma correcta`;
};

export default postProduct;

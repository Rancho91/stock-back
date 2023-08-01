import { sequelize } from "../../db";

export class controllerCombos {
  public async createcombo({
    productos,
    description,
    codigoInterno,
  }: {
    productos: [];
    description: string;
    codigoInterno: string;
  }) {
    const t = await sequelize.transaction();
    try {
      let combo = await sequelize.models.Combos.create(
        { description, codigoInterno },
        { transaction: t }
      );
      await Promise.all(
        productos.map(async (prod) => {
          const { idProducto, cantidad } = prod;
          const codigoInterno = combo?.dataValues.codigoInterno;
          await sequelize.models.CombosProductos.create(
            { idProducto, idCombo: codigoInterno, cantidad },
            { transaction: t }
          );
        })
      );
      await t.commit();
      return "se creo el combo de forma correcta";
    } catch (error) {
      t.rollback();
      return error;
    }
  }
}

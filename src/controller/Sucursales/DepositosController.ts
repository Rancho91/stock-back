import { sequelize } from "../../db";

export class DepositoControllers {
  public async createDeposito({ description }: { description: string }) {
    return await sequelize.models.Deposito.create({
      description,
    });
  }
  public async updateDeposito({
    deposito,
    id,
  }: {
    deposito: object;
    id: number;
  }) {
    return await sequelize.models.Deposito.update(
      {
        deposito,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }
  public async deleteDeposito(id: number) {
    return await sequelize.models.Deposito.update(
      {
        delete: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }
}

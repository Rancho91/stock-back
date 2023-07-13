import { sequelize } from "../../db";

export class DepositoControllers {
  public async createDeposito({description}: {description:string}) {
    return await sequelize.models.Deposito.create({
      description,
    });
  }
}

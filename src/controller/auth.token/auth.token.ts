import { sequelize } from "../../db";
export class UserControllers {
  public async postUser({
    username,
    password,
    email,
  }: {
    username: string;
    password: string;
    email: string;
  }) {
    const findEmail = await sequelize.models.Users.findOne({where:{
      email:email
    }})
    if(!findEmail) throw new Error("este email ya ha sido registrado")
    
    const user = await sequelize.models.Users.create({
      username,
      email,
      password,
    });
    return user.dataValues;
  }
  public async getValidatePass({
    password,
    email,
  }: {
    password: string;
    email: string;
  }) {
    const validate = this.validate(password, email);
    return validate;
  }



  private async validate(password: string, email: string) {
    const passDB = await sequelize.models.Users.findOne({
      attributes: ["password"],
      where: {
        email: email,
      },
    });
    if(passDB?.dataValues.password===password) return true
    return false
  }

  public async getUser({ email }: { email: string }) {
    const user = await sequelize.models.Users.findOne({
      attributes: ["email"],
      where: {
        email: email,
      },
    });
    return user?.dataValues;
  }
}

import { sequelize } from "../../db";
import bcrypt from "bcryptjs"
export class UserControllers {
  
    public async postUser({username, password, email}:{username:string, password:string, email:string}){
        const passwordEncrypt = await this.encrypt(password)
        const user= await sequelize.models.Users.create({
            username,
            email,
            password:passwordEncrypt
        })
        console.log(user)
        return user.dataValues
    }
    public async getValidatePass({password,email}:{password:string, email:string}){
        const validate = this.validate(password, email)
        return validate
    }

    private async encrypt(password:string){
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password,salt )
    }

    private async validate(password:string, email:string){
        const passDB = await sequelize.models.Users.findOne({attributes:["password"],
            where:{
                email : email
            }
        })
     return  await bcrypt.compare(password, passDB?.dataValues.password)
    }

    public async getUser({email}:{email:string}){
       const user = await sequelize.models.Users.findOne({
        attributes:["email"],
            where:{
                email :email
            }
        })
        return user?.dataValues
    }
}
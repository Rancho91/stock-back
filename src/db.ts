import {Sequelize} from 'sequelize-typescript'

export const sequelize = new Sequelize("stock","postgres","Rama1291",{
    host:"localhost",
    dialect:"postgres",
    models: [__dirname + "/models"]

})

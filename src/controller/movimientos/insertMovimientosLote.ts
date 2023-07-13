// import Sucursales from "../../models/sucursales";
// import { sequelize } from "../../db";
// import { SucursalesInterface } from "../../types/products";
// const sucursalesRepository = sequelize.getRepository(Sucursales);


// const insertSucursales = async (sucursal:SucursalesInterface) =>{
//     const { telefono, direccion, descripcion } = sucursal;
//     await sucursalesRepository.create({
//         direccion: direccion,
//         telefono: telefono,
//         descripcion:descripcion
//     });
//     return "se creo la sucursale de forma correcta"
// }

// export {insertSucursales}
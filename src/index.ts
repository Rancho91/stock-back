import app from "./app";
import { sequelize } from "./db";
const {PORT} = process.env;

app.listen(PORT || 3001, async () =>{
    console.log(`server running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log("Connected to the database");
    
        // Crea la base de datos si no existe
        await sequelize.sync({ force: true });
        console.log("Database synchronized");
      } catch (error) {
        console.error("Error connecting to the database", error);
      }
})

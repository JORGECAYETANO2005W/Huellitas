
import mongoose from "mongoose"; // Importar mongoose para trabajar con MongoDB
import mongoose from "mongoose"; 

// Función para conectar a la base de datos MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect( 
        //"mongodb://127.0.0.1:27017/AgriStore"
        "mongodb+srv://JMCG2005:JMCG2005@huellitas.ykwou.mongodb.net/Huellitas?retryWrites=true&w=majority&appName=JMCG2005" // URI de conexión a MongoDB Atlas
        );
        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error al conectar MongoDB:", error);
    }
};


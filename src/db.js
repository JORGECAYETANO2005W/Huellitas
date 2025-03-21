
import mongoose from "mongoose"; // Importar mongoose para trabajar con MongoDB

// Función para conectar a la base de datos MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Huellitas"); // Conectar a la base de datos 
        console.log("MongoDB conectado"); // Mensaje de éxito al conectar
    } catch (error) {
        console.error("Error al conectar MongoDB:", error); // Mostrar el error si la conexión falla
    }
};


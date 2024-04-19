// imports
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import actividadesRoutes from "./routes/actividades.routes.js";
import propietariosRoutes from "./routes/propietarios.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import puntos_interesRoutes from "./routes/puntos_interes.routes.js";
import reseniasRoutes from "./routes/resenias.routes.js";
import temporadasRoutes from "./routes/temporadas.routes.js";
import floresRoutes from "./routes/flores.routes.js";
import imagenesRoutes from "./routes/imagenes.routes.js";

// constantes
const PORT = 3000;
const app = express();

// uses
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// servir imágenes
app.use('/img', express.static('public'));

// rutas de todos los controladores
app.use("/api", actividadesRoutes);
app.use("/api", propietariosRoutes);
app.use("/api", clientesRoutes);
app.use("/api", puntos_interesRoutes);
app.use("/api", reseniasRoutes);
app.use("/api", temporadasRoutes);
app.use("/api", floresRoutes);
app.use("/api", imagenesRoutes);

// iniciar servidor
app.listen(PORT, () => {
  console.log("Server running in port 3000");
});

/* PONER CORS SI EL DOMINIO/API(PUERTOS) ES DIFERENTE */

/*

api.use(cors(
    { origin: ["http://localhost:3000", "http://localhost:3001" , "http://localhost:3002"] }, whitelist
    { allow_origin_regex='https?://localhost(:[0-9]+)?'}
    { credentials: true },
    { methods: ["GET", "POST", "PUT", "DELETE"] },
    { optionsSuccessStatus: 200 },
    { preflightContinue: true },
    { allowedHeaders: ["Content-Type", "Authorization"] },
    { exposedHeaders: ["Authorization"] },
    { maxAge: 600 },    
));

method:OPTIONS para ver las peticiones

*/

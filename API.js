
// imports
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

import actividadesRoutes from "./routes/actividades.routes.js";
import propietariosRoutes from "./routes/propietarios.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import puntos_interesControllers from "./routes/puntos_interes.controllers.js";
import reseniasController from "./routes/resenias.controller.js";
import temporadasController from "./routes/temporadas.controller.js";
import floresController from "./routes/flores.controller.js";
import imagenesController from "./routes/imagenes.controller.js";
import NM_Flor_Punto_interesController from "./routes/NM_Flor_Punto_interes.controller.js";



// constantes
const PORT = 3000
const app = express()

// uses
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173', credentials: true}))

// rutas de todos los controladores
app.use('/api', actividadesRoutes)
app.use('/api', propietariosRoutes)
app.use('/api', clientesRoutes)
app.use('/api', puntos_interesControllers)
app.use('/api', reseniasController)
app.use('/api', temporadasController)
app.use('/api', floresController)
app.use('/api', imagenesController)
app.use('/api', NM_Flor_Punto_interesController)

// iniciar servidor
app.listen(PORT, () => {
    console.log('Server running in port 3000')
})

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


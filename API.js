
// imports
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

import actividadesRoutes from "@routes/actividades.routes";
// import clientesRoutes from "@routes/clientes.routes";
// import propietariosRoutes from "@routes/propietarios.routes";
// import puntos_interesControllers from "@routes/puntos_interes.controllers";
// import reseniasController from "@routes/resenias.controller";
// import temporadasController from "@routes/temporadas.controller";
// import floresController from "@routes/flores.controller";
// import imagenesController from "@routes/imagenes.controller";
// import NM_Flor_Punto_interesController from "@routes/NM_Flor_Punto_interes.controller";



// constantes
const PORT = 3000
const app = express()

// uses
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173', credentials: true}))

// rutas de todos los controladores
// app.use('/api', actividadesRoutes)

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


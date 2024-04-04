
// imports
import { Express } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

// constantes
const PORT = 3000
const app = Express()
// const routes = ...

// uses
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173', credentials: true}))


// iniciar servidor
app.listen()

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


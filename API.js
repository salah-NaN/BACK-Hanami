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

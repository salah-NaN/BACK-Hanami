import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import { registerPropietario, login } from "../controllers/auth.controllers.js";
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Propietarios from "../models/Propietarios.js";
import checkToken from "../middleware/checkToken.js";
import PuntosInteres from "../models/Puntos_interes.js";
// constantes
const router = Router();
const secretKey = "esto_es_la_leche_de_creativo";

// Al tener un register, he de hacer un beforeCreate para encriptar la
// contraseña
Propietarios.beforeCreate(async (propietario) => {
  const codedPassword = await bcrypt.hash(propietario.password, 10);
  propietario.password = codedPassword;
});
Propietarios.beforeUpdate(async (propietario) => {
  const codedPassword = await bcrypt.hash(propietario.password, 10);
  propietario.password = codedPassword;
})

export default router
  .get(
    "/propietarios",
    checkToken,
    async (req, res) => await readItems(req, res, Propietarios)
  )
  .get(
    "/propietarios/:id",
    async (req, res) => await readItem(req, res, Propietarios)
  )
  .post(
    "/propietarios",
    checkToken,
    async (req, res) => await createItem(req, res, Propietarios)
  )
  // Si queremos que pueda modificar sus datos (email, contraseña, etc) .put("/propietarios/:id/login", checkToken, async (req, res) => await updateItem(req, res, Propietarios))
  .put(
    "/propietarios/:id",
    async (req, res) => await updateItem(req, res, Propietarios)
  )
  .delete(
    "/propietarios/:id",
    checkToken,
    async (req, res) => await deleteItem(req, res, Propietarios)
  )
  .post(
    "/register",
    async (req, res) => await registerPropietario(req, res, Propietarios)
  )
  .post(
    "/login",
    async (req, res) => await login(req, res, Propietarios, jwt, secretKey)
  )



// // register
// .post("/propietarios/register", async (req, res) => {
//   try {
//     const {nombre, apellidos, email, password} = req.body;
//     if (!nombre || !apellidos || !email || !password) {
//       return res.status(400).json({message: "Todos los campos requeridos"});
//     }
//     const posiblePropietario = await Propietarios.findOne(
//       {where: {email}},
//       {raw: true}
//     );
//     if (posiblePropietario)
//       return res.status(400).json({message: "Usuario registrado"});
//     const propietario = await Propietarios.create(req.body);
//     if (!propietario) return res.status(404).json({message: "No encontrado"});
//     res.status(201).json(propietario);
//   } catch (error) {
//     res.status(400).json({error: error.message});
//   }
// })

// // login
// .post("/propietarios/login", async (req, res) => {
//   try {
//     const {email, password} = req.body;
//     const propietario = await Propietarios.findOne({where: {email}});
//     if (!propietario) return res.status(404).json({error: "No encontrado"});
//     const verifyPassword = await bcrypt.compare(
//       password,
//       propietario.password
//     );
//     // error contraseña inválida
//     if (!verifyPassword)
//       return res.status(401).json({error: "Contraseña inválida"});
//     const token = jwt.sign(
//       {
//         propietario_id: propietario.id,
//         propietario_nombre: propietario.nombre,
//       },
//       secretKey,
//       {expiresIn: "2h"}
//     );
//     res.cookie("token", token, {httpOnly: false, maxAge: 7200000});
//     res.json({
//       propietario_id: propietario.id,
//       propietario_nombre: propietario.nombre,
//     });
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// });

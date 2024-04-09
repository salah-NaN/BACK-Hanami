import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import {Router} from "express";
import Clientes from "../models/Clientes.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import checkToken from "../middleware/checkToken.js";
import Resenias from "../models/Resenias.js";

// constantes
const router = Router();
const secretKey = "esto_es_la_leche_de_creativo";

// funciones añadidas
Clientes.hasMany(Resenias, {foreignKey: "cliente_id"});

// Al tener un register, he de hacer un beforeCreate para encriptar la
// contraseña
Clientes.beforeCreate(async (cliente) => {
  const codedPassword = await bcrypt.hash(cliente.password, 10);
  cliente.password = codedPassword;
});

export default router
  .get(
    "/clientes",
    checkToken,
    async (req, res) => await readItems(req, res, Clientes)
  )
  .get(
    "/clientes/:id",
    checkToken,
    async (req, res) => await readItem(req, res, Clientes)
  )
  .post(
    "/clientes",
    checkToken,
    async (req, res) => await createItem(req, res, Clientes)
  )
  .put(
    "/clientes/:id",
    checkToken,
    async (req, res) => await updateItem(req, res, Clientes)
  )
  .delete(
    "/clientes/:id",
    checkToken,
    async (req, res) => await deleteItem(req, res, Clientes)
  )

  // register
  .post("/clientes/register", async (req, res) => {
    try {
      const {nombre, email, password} = req.body;
      if (!nombre || !email || !password) {
        return res.status(400).json({message: "Todos los campos requeridos"});
      }
      const posibleCliente = await Clientes.findOne(
        {where: {email}},
        {raw: true}
      );
      if (posibleCliente)
        return res.status(400).json({message: "Usuario registrado"});
      const cliente = await Clientes.create(req.body);
      if (!cliente) return res.status(404).json({message: "No encontrado"});
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  })

  // login
  .post("/clientes/login", async (req, res) => {
    try {
      const {email, password} = req.body;
      const cliente = await Clientes.findOne({where: {email}});
      if (!cliente) return res.status(404).json({error: "No encontrado"});
      const verifyPassword = await bcrypt.compare(password, cliente.password);
      // error contraseña inválida
      if (!verifyPassword)
        return res.status(401).json({error: "Contraseña inválida"});
      const token = jwt.sign(
        {cliente_id: cliente.id, cliente_nombre: cliente.nombre},
        secretKey,
        {expiresIn: "2h"}
      );
      res.cookie("token", token, {httpOnly: false, maxAge: 7200000});
      res.json({cliente_id: cliente.id, cliente_nombre: cliente.nombre});
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  });

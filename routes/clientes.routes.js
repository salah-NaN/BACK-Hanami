// imports controladores

import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import {register, login} from "../controllers/auth.controllers.js";

// imports dependencias

import {Router} from "express";
import Clientes from "../models/Clientes.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import checkToken from "../middleware/checkToken.js";

// constantes
const router = Router();
const secretKey = "esto_es_la_leche_de_creativo";

// funciones añadidas
// Al tener un register, he de hacer un beforeCreate para encriptar la
// contraseña
Clientes.beforeCreate(async (cliente) => {
  const codedPassword = await bcrypt.hash(cliente.password, 10);
  cliente.password = codedPassword;
});
Clientes.beforeUpdate(async (cliente) => {
  const codedPassword = await bcrypt.hash(cliente.password, 10);
  cliente.password = codedPassword;
});

export default router
  .get("/clientes", async (req, res) => await readItems(req, res, Clientes))
  .get("/clientes/:id", async (req, res) => await readItem(req, res, Clientes))
  .post("/clientes", async (req, res) => await createItem(req, res, Clientes))
  .put(
    "/clientes/:id",
    async (req, res) => await updateItem(req, res, Clientes)
  )
  .delete(
    "/clientes/:id",
    async (req, res) => await deleteItem(req, res, Clientes)
  )
  .post(
    "/clientes/register",
    async (req, res) => await register(req, res, Clientes)
  )
  .post(
    "/clientes/login",
    async (req, res) => await login(req, res, Clientes, jwt, secretKey)
  );

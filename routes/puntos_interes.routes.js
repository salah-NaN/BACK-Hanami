import checkToken from "../middleware/checkToken.js";
import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import {
  todos_puntos_interes,
  puntos_interes_buscador,
  punto_interes_page,
  puntos_interes_propietarios,
  puntos_interes_una_semana,
} from "../controllers/puntos_interes.controllers.js";
import {Router} from "express";

const router = Router();

import PuntosInteres from "../models/Puntos_interes.js";

import Temporadas from "../models/Temporadas.js";
import Actividades from "../models/Actividades.js";
import Propietarios from "../models/Propietarios.js";
import Imagenes from "../models/Imagenes.js";
import Flores from "../models/Flores.js";
import Resenias from "../models/Resenias.js";

export default router
  .get(
    "/puntos_interes",
    async (req, res) => await readItems(req, res, PuntosInteres)
  )
  .get(
    "/puntos_interes/:id",
    async (req, res) => await readItem(req, res, PuntosInteres)
  )
  .post(
    "/puntos_interes",
    async (req, res) => await createItem(req, res, PuntosInteres)
  )
  .put(
    "/puntos_interes/:id",
    async (req, res) => await updateItem(req, res, PuntosInteres)
  )
  .delete(
    "/puntos_interes/:id",
    async (req, res) => await deleteItem(req, res, PuntosInteres)
  )
  .get(
    "/todos_puntos_interes",
    async (req, res) =>
      await todos_puntos_interes(
        req,
        res,
        PuntosInteres,
        Temporadas,
        Flores,
        Resenias
      )
  )
  .get(
    "/puntos_interes/:poblacion/:fecha/:flor",
    async (req, res) =>
      await puntos_interes_buscador(
        req,
        res,
        PuntosInteres,
        Temporadas,
        Flores,
        Actividades,
        Resenias,
        Imagenes
      )
  )
  .get(
    "/puntos_interes_propietarios/:id",
    async (req, res) =>
      await puntos_interes_propietarios(req, res, PuntosInteres, Propietarios)
  )
  .get(
    "/punto_interes_page/:id",
    async (req, res) =>
      await punto_interes_page(
        req,
        res,
        PuntosInteres,
        Propietarios,
        Temporadas,
        Actividades,
        Imagenes,
        Resenias,
        Flores
      )
  )
  .get(
    "/actividades_or_puntointeres",
    async (req, res) =>
      await puntos_interes_una_semana(
        req,
        res,
        PuntosInteres,
        Temporadas,
        Actividades,
        Imagenes
      )
  );
// .get(
//   "/actividades/:poblacion/:fecha/:flor",
//   async (req, res) =>
//     await actividades_buscador(
//       req,
//       res,
//       Actividades,
//       Temporadas,
//       PuntosInteres
//     )
// );
/*
    Endpoint para poder sacar todos los puntos de interés y todas sus temporadas 
    asociadas
    */

// .get("/todos_puntos_interes", async (req, res) => {
//     try {
//         const puntos_interes = await PuntosInteres.findAll({
//             include: {
//                 model: Temporadas,
//                 where: {id: 'punto_interes_id'}
//             }
//         })
//         if (!puntos_interes) return res.status(404).json({ message: 'No encontrados' })
//         res.status(201).json(puntos_interes)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

// .get("/todos_puntos_interes", async (req, res) => {
//   try {
//     const puntos_interes = await PuntosInteres.findAll({
//       // where: {id: 3} // Incluye todas las temporadas asociadas a los puntos de interés
//       include: [
//         {
//           model: Temporadas,
//           required: false,
//         },
//       ],
//     });

//     if (!puntos_interes) {
//       return res
//         .status(404)
//         .json({message: "No se encontraron puntos de interés"});
//     }

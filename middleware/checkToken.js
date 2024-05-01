import jwt from "jsonwebtoken";

const SECRET_KEY = "esto_es_la_leche_de_creativo";

const checkToken = (req, res, next) => {
  const token = req.cookies?.token; // Obté el token des de la cookie de la petició
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" }); // Retorna error 401 si no hi ha cap token
  }
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY); // Verifica el token utilitzant la clau secreta
    req.body.cliente_id = decodedToken.cliente_id; // Estableix l'ID d'usuari a l'objecte de la petició
    next(); // Passa al següent middleware
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" }); // Retorna error 401 si el token és invàlid
  }
};

export default checkToken;
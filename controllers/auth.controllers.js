import bcrypt from "bcrypt";
import Propietarios from "../models/Propietarios.js";

const registerPropietario = async (req, res, Model) => {
  try {
    const {
      nombre,
      apellidos,
      email,
      password,
      tipo_documento,
      num_doc,
      latitud,
      longitud,
      ubicacion,
      poblacion,
      comarca,
      telefono,
      entidad,
    } = req.body;
    if (
      !nombre ||
      !apellidos ||
      !email ||
      !password ||
      !tipo_documento ||
      !num_doc ||
      !latitud ||
      !longitud ||
      !ubicacion ||
      !poblacion ||
      !comarca ||
      !telefono ||
      !entidad
    ) {
      return res.status(400).json({ message: "Todos los campos requeridos" });
    }
    const posiblePropietario = await Model.findOne(
      { where: { email } },
      { raw: true }
    );
    if (posiblePropietario)
      return res.status(400).json({ message: "Usuario registrado" });
    const propietario = await Model.create({
      nombre,
      apellidos,
      email,
      password,
      tipo_documento,
      num_doc,
      latitud,
      longitud,
      ubicacion,
      poblacion,
      comarca,
      telefono,
      entidad,
    });

    if (!propietario) return res.status(404).json({ message: "No encontrado" });
    res.status(201).json(propietario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const register = async (req, res, Model) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: "Todos los campos requeridos" });
    }
    const posibleCliente = await Model.findOne(
      { where: { email } },
      { raw: true }
    );
    if (posibleCliente)
      return res.status(400).json({ message: "Usuario registrado" });
    const cliente = await Model.create(req.body);
    if (!cliente) return res.status(404).json({ message: "No encontrado" });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res, Model, jwt, secretKey) => {
  try {
    const { email, password } = req.body;
    const cliente = await Model.findOne({ where: { email } });
    if (!cliente) return res.status(404).json({ error: "No encontrado" });
    const verifyPassword = await bcrypt.compare(password, cliente.password);
    // error contraseña inválida
    if (!verifyPassword)
      return res.status(401).json({ error: "Contraseña inválida" });
    if (Model === Propietarios) {
      const token = jwt.sign(
        { propietario_id: cliente.id, propietario_nombre: cliente.nombre },
        secretKey,
        { expiresIn: "2h" }
      );

      res.cookie("token", token, { httpOnly: false, maxAge: 7200000 });
      res.json({
        propietario_id: cliente.id,
        propietario_nombre: cliente.nombre,
      });
      console.log(token);
    } else {
      const token = jwt.sign(
        { cliente_id: cliente.id, cliente_nombre: cliente.nombre },
        secretKey,
        { expiresIn: "2h" }
      );

      res.cookie("token", token, { httpOnly: false, maxAge: 7200000 });
      res.json({ cliente_id: cliente.id, cliente_nombre: cliente.nombre });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { register, login, registerPropietario };

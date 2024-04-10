import bcrypt from "bcrypt";

const register = async (req, res, Model) => {
    try {
        const {nombre, email, password} = req.body;
        if (!nombre || !email || !password) {
          return res.status(400).json({message: "Todos los campos requeridos"});
        }
        const posibleCliente = await Model.findOne(
          {where: {email}},
          {raw: true}
        );
        if (posibleCliente)
          return res.status(400).json({message: "Usuario registrado"});
        const cliente = await Model.create(req.body);
        if (!cliente) return res.status(404).json({message: "No encontrado"});
        res.status(201).json(cliente);
      } catch (error) {
        res.status(400).json({error: error.message});
      }
}

const login = async (req, res, Model, jwt, secretKey) => {
    try {
        const {email, password} = req.body;
        const cliente = await Model.findOne({where: {email}});
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
}

export {register, login}
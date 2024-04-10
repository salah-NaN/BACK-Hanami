import bcrypt from "bcrypt";


const register = async (req, res, Model) => {
    try {
        const { nombre, apellidos, email, password } = req.body;
        if (!nombre || !apellidos || !email || !password) {
            return res.status(400).json({ message: "Todos los campos requeridos" });
        }
        const posiblePropietario = await Model.findOne(
            { where: { email } },
            { raw: true }
        );
        if (posiblePropietario)
            return res.status(400).json({ message: "Usuario registrado" });
        const propietario = await Model.create(req.body);
        if (!propietario) return res.status(404).json({ message: "No encontrado" });
        res.status(201).json(propietario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const login = async (req, res, Model, jwt, secretKey) => {
    try {
        const {email, password} = req.body;
        const propietario = await Model.findOne({where: {email}});
        if (!propietario) return res.status(404).json({error: "No encontrado"});
        const verifyPassword = await bcrypt.compare(
          password,
          propietario.password
        );
        // error contraseña inválida
        if (!verifyPassword)
          return res.status(401).json({error: "Contraseña inválida"});
        const token = jwt.sign(
          {
            propietario_id: propietario.id,
            propietario_nombre: propietario.nombre,
          },
          secretKey,
          {expiresIn: "2h"}
        );
        res.cookie("token", token, {httpOnly: false, maxAge: 7200000});
        res.json({
          propietario_id: propietario.id,
          propietario_nombre: propietario.nombre,
        });
      } catch (error) {
        res.status(500).json({error: error.message});
      }

}

export {register, login}
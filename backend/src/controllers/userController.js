const User = require("../models/User");

// POST /api/users
// Recebe { fullName, email, phone } e cria um novo usuário
exports.signupUser = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;

    // 1) Validação
    if (!fullName || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }

    // 2) Checa existência por e-mail
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "E-mail já cadastrado." });
    }

    // 3) Cria usuário
    const user = await User.create({ fullName, email, phone });

    // 4) Retorna dados do usuário criado
    return res.status(201).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    });
  } catch (err) {
    next(err); // dispara o middleware de erro
  }
};

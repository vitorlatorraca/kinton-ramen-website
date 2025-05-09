const mongoose = require("mongoose");

// Esquema de usuário: armazena nome completo, e-mail e telefone
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt e updatedAt automáticos
  }
);

module.exports = mongoose.model("User", userSchema);
x;

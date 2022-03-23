const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    whenToCome: { type: Date, required: true },
    isCame: { type: Boolean, required: false, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("product", productSchema);

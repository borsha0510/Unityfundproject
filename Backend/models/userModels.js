import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //cartData: { type: object, default: {} },
  },
  { minimize: false }
);
const userModels = mongoose.models.user || mongoose.model("user", userSchema);
export default userModels;

import mongoose from "mongoose";
const donateSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const donateModels =
  mongoose.models.donate || mongoose.model("food", donateSchema);

export default donateModels;

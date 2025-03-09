import donateModels from "../models/DonateModels.js";
import fs from "fs";
// add  donate item

export const addDonateItem = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const donate = new donateModels({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await donate.save();
    res.json({ success: true, message: "Item Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const listDonate = async (req, res) => {
  try {
    const foods = await donateModels.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeDonate = async (req, res) => {
  try {
    const foods = await donateModels.findById(req.body.id);
    fs.unlink("uploads/${food.image},()=>{}");
    await donateModels.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Donate Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export default { addDonateItem, listDonate, removeDonate };

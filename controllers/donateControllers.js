import donateModels from "../models/donateModels.js";
import fs from "fs";

export const addDonateItem = async (req, res) => {
    let image_filename = `${req.file.filename}`; 

    const donate = new donateModels({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await donate.save();
        res.json({ success: true, message: "Item Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const listFood = async (req,res)=>{
    try {
        const foods = await donateModels.find({});
        res.json({success:true,data:foods})
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
        
    }

}

const removeFood = async(req,res)=>{
    try {
        const foods = await donateModels.findById(req.body.id);
        fs.unlink('uploads/${food.image},()=>{}')
        await donateModels.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}
export default {addDonateItem,listFood,removeFood};  // Default export of the object

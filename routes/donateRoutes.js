import express from "express"; 
import { addDonateItem,listFood,removeFood } from "../controllers/donateControllers.js";
import multer from "multer";

const donateRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads", 
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`); 
    }
});

const upload = multer({ storage: storage });

donateRouter.post("/add", upload.single("image"), addDonateItem);
donateRouter.get("/list",listFood)
donateRouter.post("/remove",removeFood);

export default donateRouter;

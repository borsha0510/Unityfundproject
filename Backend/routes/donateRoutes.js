import { addDonateItem } from "../controllers/DonateControllers.js";
import multer from "multer";
import express from "express";

const donateRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

donateRouter.post("/add", upload.single("image"), addDonateItem);

export default donateRouter;

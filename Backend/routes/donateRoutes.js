import express from "express";
import { addDonateItem } from "../controllers/donateController.js";
import multer from "multer";

const donateRouter = express.Router();
donateRouter.post("/add", addDonateItem);
export default donateRouter;

import express from "express";

import checkToken from "../middlewares/checkToken.js";
import {
  getAllUsers,
  deleteUser,
  deleteAllUsers,
  updatedUser,
} from "../controllers/users.js";


const router = express.Router();

router.get("/", checkToken, getAllUsers);

router.get("/profile", checkToken, getProfile);

router.post("/", createUser);

router.put("/:id", checkToken, updatedUser);

router.delete("/:id", checkToken, deleteUser);

router.delete("/", checkToken, deleteAllUsers);

export default router;
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
//app config
const app = express();
const PORT = 4000;
//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/donate", require("./routes/donateRoutes"));

app.get("/", (req, res) => {
  res.send("  API  working");
});
app.listen(PORT, () => {
  console.log("Server Started on http://localhost: ${PORT}");
});
//mongodb+srv://farhananitu30:10384@cluster0.jvrdq.mongodb.net/?

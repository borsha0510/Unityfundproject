import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import donateRouter from "./routes/donateRoutes.js";
//app config
const app = express();
const PORT = 4000;
//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/donate", donateRouter);
app.use("images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log("Server Started on http://localhost: ${PORT}");
});

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import donateRoutes from "./routes/donateRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";

// App config
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/donate", donateRoutes);
app.use("/api/users", userRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

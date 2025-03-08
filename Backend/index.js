import express from "express";
import cors from "cors";
//app config
const app = express();
const PORT = 4000;
//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("  API  working");
});
app.listen(PORT, () => {
  console.log("Server Started on http://localhost: ${PORT}");
});

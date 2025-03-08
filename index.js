import express from "express"
import cors from "cors"
import connectDB from "./config/db.js";
import donateRouter from "./routes/donateRoutes.js";

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectDB();
app.use("/api/donate", donateRouter);
app.use("images",express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Index Started on http://localhost:${port}`)
})

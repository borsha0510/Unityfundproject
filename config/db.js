import mongoose from "mongoose";
 

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://farhananitu30:10384@cluster0.jvrdq.mongodb.net/Unityfund"
    )
    .then(() => {
      console.log("Database Connected");
    });
};

export default connectDB; 
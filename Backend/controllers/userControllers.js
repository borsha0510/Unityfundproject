import userModels from "../models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModels.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    const token = createToken(user._id);
    return res.json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error during login" });
  }
};

// Register User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await userModels.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User Already Exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModels({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    const token = createToken(user._id);
    return res.json({
      success: true,
      message: "Registration successful",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error during registration" });
  }
};

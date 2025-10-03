// Backend/controllers/userController.js
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

/* ---------------- Create JWT Token ---------------- */
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

/* ---------------- Login User ---------------- */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message:
          "Account not found. Please check your email or register a new account",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password. Please try again",
      });
    }

    const token = createToken(user._id);

    res.json({
      success: true,
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: error.message,
    });
  }
};

/* ---------------- Register User ---------------- */
export const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  // Checking is user already exists
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message:
          "This email is already registered. Please use another email or try logging in",
      });
    }

    // Validating Email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Validating strong password
    // if (password.length < 8) {
    //   return res.json({
    //     success: false,
    //     message:
    //       "Please enter a strong Password must be at least 8 characters long",
    //   });
    // }

    // Validate strong password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long and include:" +
          "At least 1 uppercase letter (A-Z)," +
          "At least 1 lowercase letter (a-z)," +
          "At least 1 number (0-9)," +
          "At least 1 special character (e.g. !@#$%^&*)," +
          "Example: StrongP@ss1",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};

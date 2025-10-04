// Backend / server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

/* ---------------- App Config ---------------- */
const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------------- Middleware ---------------- */
app.use(express.json());
app.use(cors());

/* ---------------- Database Connected ---------------- */
connectDB();

/* ---------------- API Endpoints ---------------- */
app.use("/api/food", foodRouter);
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

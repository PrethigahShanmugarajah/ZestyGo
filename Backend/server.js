// Backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

/* ---------------- App Config ---------------- */
const app = express();
const port = process.env.PORT;

/* ---------------- Middleware ---------------- */
app.use(express.json());
app.use(cors());

/* ---------------- Database Connected ---------------- */
connectDB();

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

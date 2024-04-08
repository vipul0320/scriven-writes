import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import soloRoutes from "./routes/soloRoute.js";
import anthoRoutes from "./routes/anthoRoute.js";
import cors from "cors";
import multer from 'multer';
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Multer configuration for handling file uploads
const storage = multer.memoryStorage(); // Store file in memory as a buffer
const upload = multer({ storage });


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/onboard", soloRoutes);
app.use("/api/v1/onboard", anthoRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to scriven writes app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

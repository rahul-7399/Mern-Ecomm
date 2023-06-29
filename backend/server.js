import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/User.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

const app = express();

dotenv.config({ path: "./backend/config/config.env" });

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

//routes
app.use("/api/v1", userRoute);

app.get("/", function (req, res) {
  res.send("<h1>Welcome to ecomm</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

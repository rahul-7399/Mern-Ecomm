import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connect db  ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to Mongo ${error}`);
  }
};

export default connectDB;

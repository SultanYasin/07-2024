import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDB = async () => {
  const connectionState = mongoose.connection.readyState;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is not valid");
  if (connectionState === 1) {
    console.log("Already Connected ");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting... ");
    return;
  }

  try {
  await mongoose.connect(MONGODB_URI!, {
      dbName: "api_admin",
      bufferCommands: true,
    });
    console.log("Connected to DB");
  } catch (error: any) {
      throw new Error("********** \n Database connection error:\n" + error);
  }
};

import type { Collection } from "mongodb";
import connectDB from "./mongo";

export const getTechnicalCollection = async (): Promise<Collection> => {
  const db = await connectDB();
  return db.collection("technical");
};

export const getCreativeCollection = async (): Promise<Collection> => {
  const db = await connectDB();
  return db.collection("creative");
};

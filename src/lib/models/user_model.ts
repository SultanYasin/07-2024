import mongoose from "mongoose";
const { Schema } = mongoose;

type Gender = "Male" | "Female" | "Other";



const user_schema = new Schema(
  {
    img: {
      type: String,
      required: false,
    },
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    date_of_birth: {
      type: String,
      required: true,
      unique: false,
    },
    gender: {
      type: String as () => Gender,
      required: true,
    },

    social_security_number: {
      type: Number,
      required: true,
    },
    role: {
      type: String as () => Role,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    address1: {
      type: String,
      required: true,
      unique: false,
    },
    address2: {
      type: String,
      required: false,
      unique: false,
    },

    /* _______Medical Information_________ */
    insurance_provider: {
      type: String,
      required: false,
    },

    insurance_number: {
      type: Number,
      required: false,
    },

    /* ________Emergency contact number________ */
    emergency_person: { type: String, required: true },
    emergency_phone_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

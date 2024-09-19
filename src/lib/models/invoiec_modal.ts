import mongoose from "mongoose";
const { Schema } = mongoose;

type sent_via = "Klarna"|"Kivra"|"Post";

export const invoice_schema = new Schema(
  {
    invoice_id: { type: String, required: true },
    vendor: { type: String, required: true },
    invoice_date: { type: Date, required: true },
    invoice_total: { type: Number, required: true },
    invoice_status: { type: String, required: true },
    customer_id: { type: String, required: true },
    customer_name: { type: String, required: true },
    customer_email: { type: String, required: true },
    customer_phone: { type: String, required: true },
    invoice_items: [],
    payment_status: { type: String, required: true },
    payment_date: { type: Date, required: true },
    payment_amount: { type: Number, required: true },
  },
  { timestamps: true }
);

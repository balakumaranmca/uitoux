import mongoose from "mongoose";
import {userConnection} from "../databses/mongoose";
import dotenv from "dotenv";
dotenv.config();

const Schema = mongoose.Schema;

const uiBrandSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    filename: { type: String, required: true },
    active: {type: Boolean, default: true }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

if(process.env.REINDEX_DB) {
	uiBrandSchema.index({ createdAt: 1 });
	uiBrandSchema.index({ id:1 });
  console.log("brand indexing done");
}

 const brandData = mongoose.model("utxbranddatas", uiBrandSchema);

export default brandData;
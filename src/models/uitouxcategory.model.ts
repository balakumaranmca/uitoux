import mongoose from "mongoose";

const Schema = mongoose.Schema;

const uiCategorySchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    active: {type: Boolean, default: true }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

if (process.env.REINDEX_DB) {
	uiCategorySchema.index({ createdAt: 1 });
	uiCategorySchema.index({ id:1 });
  console.log("category indexing done");
}

const categoryData = mongoose.model("utxcategorydatas", uiCategorySchema);

export default categoryData;
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const uiProductRatingSchema = new Schema(
  {
    productId: { 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'utxproductsdatas' 
    },
    userId: { type: mongoose.Schema.Types.String,
      required: true,
      ref: 'users'
    },
    rating: { type: Number, required: true },
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
	uiProductRatingSchema.index({ createdAt: 1 });
	uiProductRatingSchema.index({ productId:1 });
  console.log("productRating indexing done");
}

const productRatingData = mongoose.model("utxproductratingdatas", uiProductRatingSchema);

export default productRatingData;
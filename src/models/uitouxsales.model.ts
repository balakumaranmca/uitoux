import mongoose from "mongoose";

const Schema = mongoose.Schema;

const uiSalesSchema = new Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'utxusers' 
    },
    paymentId: { type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'utxpayments' 
    },
    amt: {type: String, required: true}
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

if (process.env.REINDEX_DB) {
	uiSalesSchema.index({ createdAt: 1 });
	uiSalesSchema.index({ productId:1 });
  console.log("salesSchema indexing done");
}

const salesData = mongoose.model("utxsalesdatas", uiSalesSchema);

export default salesData;
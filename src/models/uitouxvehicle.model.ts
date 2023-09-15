import mongoose from "mongoose";

const Schema = mongoose.Schema;

const uiVehicleSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
    active: { type: Boolean, default: true }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

if (process.env.REINDEX_DB) {
	uiVehicleSchema.index({ createdAt: 1 });
	uiVehicleSchema.index({ id:1 });
  console.log("vehicle indexing done");
}

const vehicleData = mongoose.model("utxvehicledatas", uiVehicleSchema);

export default vehicleData;
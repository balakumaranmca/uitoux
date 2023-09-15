import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
      userId: { type: String, unique: true, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      mobile: { type: String },
      dob: { type: String },
      active: { type: Boolean, default: false },
      password: { type: String },
      resetPasswordToken: { type: String, default: null },
      resetPasswordExpires: { type: String, default: null },
      emailToken: { type: String, default: null },
      emailTokenExpires: { type: Date, default: null },
      accessToken: { type: String, default: null }
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    }
  );
  if (process.env.REINDEX_IBS_DB) {
    userSchema.index({ createdAt: 1 });
    userSchema.index({ email:1, emailToken:1, emailTokenExpires:1 });
    userSchema.index({ userId:1 });
    userSchema.index({ userId:1, active:1 });
    userSchema.index({ email:1 });
    userSchema.index({ resetPasswordToken:1, resetPasswordExpires:1 });
    console.log("user indexing done");
  }
 const User = mongoose.model("utxuserData", userSchema);

export default User;

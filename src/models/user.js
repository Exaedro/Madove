import { Schema, model } from "mongoose";

const userSchema = new Schema({
    discord: { type: String },
    reason: { type: String }
});

export default model('User', userSchema)
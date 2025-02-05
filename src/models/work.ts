import mongoose, { Schema } from "mongoose";

const workSchema = new Schema({
    title: String,
    description: String,
    date: String,
    img: String,
}, { timestamps: true });

const Work = mongoose.models.Work || mongoose.model("Work", workSchema);

export default Work;
import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title: String,
    description: String,
    date: String,
    img: String,
    url: String,
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
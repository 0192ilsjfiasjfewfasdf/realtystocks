import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0, // have 0 views by default
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
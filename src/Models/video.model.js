import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    videoLink: {
      type: String,
      required: true,
    },
    thumbnailImage: {
      type: String,
      required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    thumbnailImage: {
      type: String,
      required: true,
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    isPublic:{
        type: Boolean,
        required: true,
        default: true
    },
    duration:{
        type: Number,        
    },
    views:{
        type: Number,
        default: 0,        
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchema);

import { Schema, model, Types } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  },
  description: {
    type: String,
    required: true,
    minLength: [
      20,
      "Article description should be at least 20 characters long...",
    ],
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Article = model("Article", articleSchema);

export default Article;

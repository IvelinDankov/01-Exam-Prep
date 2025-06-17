import Article from "../models/articleModle.js";

export default {
  getAll() {
    return Article.find();
  },
  createArticle(title, description, author) {
    console.log(title, description, author);

    return Article.create({ title, description, author });
  },
  getLatest() {
    return Article.find().sort("-1").limit(3);
  },
};

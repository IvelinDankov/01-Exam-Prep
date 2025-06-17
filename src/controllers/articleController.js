import { Router } from "express";
import errorMsg from "../utils/errorMsg.js";
import articleService from "../services/articleService.js";

const articleController = Router();

articleController.get("/catalog", async (req, res) => {
  const articles = await articleService.getAll();

  res.render("article/all-articles", { articles });
});

articleController.get("/create", (req, res) => {
  res.render("article/create");
});
articleController.post("/create", async (req, res) => {
  const { title, description } = req.body;
  const author = req.user?.id;

  try {
    await articleService.createArticle(title, description, author);
    res.redirect("/articles/catalog");
  } catch (err) {
    const error = errorMsg(err);
    res.render("article/create", { title, content: description, error });
  }
});

export default articleController;

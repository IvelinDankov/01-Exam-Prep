import { Router } from "express";
import articleService from "../services/articleService.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
  const latestArticels = await articleService.getLatest();
  res.render("home", { latestArticels });
});

export default homeController;

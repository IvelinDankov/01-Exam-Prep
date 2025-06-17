import { Router } from "express";
import homeController from "./controllers/homeController.js";
import userController from "./controllers/userController.js";
import articleController from "./controllers/articleController.js";

const routes = Router();

routes.use(homeController);
routes.use("/users", userController);
routes.use("/articles", articleController);
routes.use((req, res, next) => {
  res.status(404).render("404");
});

export default routes;

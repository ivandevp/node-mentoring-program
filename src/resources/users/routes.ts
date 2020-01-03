import { Router } from "express";
import { userController } from "./controllers";

const router = Router();

router
  .route("/users")
  .get(userController.getAll)
  .post(userController.create);

router
  .route("/users/:id")
  .get(userController.getById)
  .put(userController.update)
  .delete(userController.delete);

export { router };

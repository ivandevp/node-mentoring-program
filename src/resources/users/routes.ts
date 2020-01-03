import { Router } from "express";
import { createValidator } from "express-joi-validation";
import { userController } from "./controllers";
import { userSchema } from "./schemas";

const router = Router();
const validator = createValidator();

router
  .route("/users")
  .get(userController.getAll)
  .post(validator.body(userSchema), userController.create);

router
  .route("/users/:id")
  .get(userController.getById)
  .put(validator.body(userSchema), userController.update)
  .delete(userController.delete);

export { router };

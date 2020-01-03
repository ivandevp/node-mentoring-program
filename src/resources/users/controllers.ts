import { Request, Response } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { userModel } from "./models";
import { UserRequestSchema } from "./schemas";

/** User Controller */
export const userController = {
  getAll(req: Request, res: Response) {
    const { loginSubstring, limit } = req.query;
    let users = [];

    if (loginSubstring && limit) {
      users = userModel.searchByLogin(loginSubstring, limit);
    } else {
      users = userModel.getAll();
    }

    res.json(users);
  },
  getById(req: Request, res: Response) {
    const user = userModel.getById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  },
  create(req: ValidatedRequest<UserRequestSchema>, res: Response) {
    const user = userModel.create(req.body);
    res.json(user);
  },
  update(req: ValidatedRequest<UserRequestSchema>, res: Response) {
    const updatedUser = userModel.update(req.params.id, req.body);

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  },
  delete(req: Request, res: Response) {
    const deletedUser = userModel.delete(req.params.id);

    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  }
};

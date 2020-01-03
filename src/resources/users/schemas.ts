import * as Joi from "@hapi/joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { User } from "../../types";

/** User query schema */
export const userSchema = Joi.object({
  /** id is generated when creating and can't be changed */
  id: Joi.string(),
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, "password")
    .required(),
  age: Joi.number()
    .integer()
    .min(4)
    .max(130)
    .required(),
  /** isDeleted is set when creating and updated when deleting */
  isDeleted: Joi.bool()
});

/** User request schema interface */
export interface UserRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: User;
}

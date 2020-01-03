import express from "express";
import { router } from "./resources/users/routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_, res) => res.end("Hola mundo!"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

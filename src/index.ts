import express from "express";
import { router } from "./resources/users/routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.end("Welcome to in-memory data REST API!"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import express from "express";
import Router from "./src/config/router.mjs";

const app = express();
const port = 3000;

app.use("/predict", Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

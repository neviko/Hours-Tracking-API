import express from "express";
import { json } from "body-parser";
import { loginRouter } from "./routes/login";
import { test } from "./routes/test";

const app = express();

app.use(json());
app.use(loginRouter);
app.use(test);
// if a route not found call to not found error, which it will call to error handler
app.all("*", async () => {
  // not found
});

export { app };

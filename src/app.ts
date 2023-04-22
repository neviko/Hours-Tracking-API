import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { covidReportRouter } from "./routes/covid-report";

const app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(loginRouter);
app.use(logoutRouter);
app.use(covidReportRouter);
// if a route not found call to not found error, which it will call to error handler
app.all("*", async () => {
  // not found
});

export { app };

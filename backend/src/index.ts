import express from "express";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

const apiPort = process.env.SERVICE_PORT;

app.get("/api/health", (_, res) => {
  res.json("ok");
});

app.listen(apiPort, () => {
  console.log("Backend available on ", apiPort);
});

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./src/utils/connectDB";
dotenv.config();
const port = process.env.PORT;
const app: Express = express();
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

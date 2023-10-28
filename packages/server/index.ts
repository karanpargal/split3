import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./src/utils/connectDB";
import userRouter from "./src/user/user.routes";
import groupRouter from "./src/group/group.routes";
import expenseRouter from "./src/expense/expense.routes";

dotenv.config();
const port = process.env.PORT;
const app: Express = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/users", userRouter);
app.use("/api/groups", groupRouter);
app.use("/api/expenses", expenseRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

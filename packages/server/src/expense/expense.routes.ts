import {
  createExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "./expense.service";
import { Request, Response, Router } from "express";

const handleCreateExpense = async (req: Request, res: Response) => {
  try {
    const { description, amount, paidBy, participants } = req.body;
    if (!description || !amount || !paidBy || !participants)
      return res.status(400).json({
        error: "Please provide a description, amount, paidBy and participants",
      });
    const expense = await createExpense(
      description,
      amount,
      paidBy,
      participants
    );
    res.status(201).json({ success: true, expense });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetExpenseById = async (req: Request, res: Response) => {
  try {
    const { expenseId } = req.params;
    if (!expenseId)
      return res.status(400).json({ error: "Please provide an expenseId" });
    const expense = await getExpenseById(expenseId);
    res.status(200).json({ success: true, expense });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateExpense = async (req: Request, res: Response) => {
  try {
    const { expenseId } = req.params;
    const { description, amount, paidBy, participants } = req.body;
    if (!expenseId)
      return res.status(400).json({ error: "Please provide an expenseId" });
    const expense = await updateExpense(
      expenseId,
      description,
      amount,
      paidBy,
      participants
    );
    res.status(200).json({ success: true, expense });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleDeleteExpense = async (req: Request, res: Response) => {
  try {
    const { expenseId } = req.params;
    if (!expenseId)
      return res.status(400).json({ error: "Please provide an expenseId" });
    const expense = await deleteExpense(expenseId);
    res.status(200).json({ success: true, expense });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const expenseRouter = Router();

expenseRouter.post("/", handleCreateExpense);
expenseRouter.get("/:expenseId", handleGetExpenseById);
expenseRouter.put("/:expenseId", handleUpdateExpense);
expenseRouter.delete("/:expenseId", handleDeleteExpense);

export default expenseRouter;

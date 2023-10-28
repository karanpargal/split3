import Expense from "./expense.schema";
import User from "../user/user.schema";

export const createExpense = async (
  description: string,
  amount: number,
  paidBy: string,
  participants: string[]
) => {
  const expense = await Expense.create({
    description,
    amount,
    paidBy,
    participants,
  });

  let perPersonAmount = amount / (participants.length + 1);

  for (const participant of participants) {
    const user1 = await User.findById(paidBy);
    const user2 = await User.findById(participant);
    const existingBalanceIndex1 = user1.balance.findIndex(
      (balance: any) => balance.user === participant
    );
    const existingBalanceIndex2 = user2.balance.findIndex(
      (balance: any) => balance.user === paidBy
    );
    if (existingBalanceIndex1 !== -1) {
      user1.balance[existingBalanceIndex1].amount -= perPersonAmount;
    } else {
      user1.balance.push({ user: participant, amount: -perPersonAmount });
    }

    if (existingBalanceIndex2 !== -1) {
      user2.balance[existingBalanceIndex2].amount += perPersonAmount;
    } else {
      user2.balance.push({ user: paidBy, amount: perPersonAmount });
    }
    await user1.save();
    await user2.save();
  }

  return expense;
};

export const getExpenseById = async (expenseId: string) => {
  const expense = await Expense.findById(expenseId)
    .populate("paidBy")
    .populate("participants");
  return expense;
};

export const updateExpense = async (
  expenseId: string,
  description: string,
  amount: number,
  paidBy: string,
  participants: string[]
) => {
  const expense = await Expense.findByIdAndUpdate(
    expenseId,
    { description, amount, paidBy, participants },
    { new: true }
  );
  return expense;
};

export const deleteExpense = async (expenseId: string) => {
  const expense = await Expense.findByIdAndDelete(expenseId);
  return expense;
};

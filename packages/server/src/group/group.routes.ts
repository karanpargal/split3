import {
  createGroup,
  addMembersToGroup,
  removeMemberFromGroup,
  addExpenseToGroup,
  getGroupById,
  getGroupByUserId,
  updateGroup,
  deleteGroup,
} from "./group.service";
import { Request, Response, Router } from "express";

const handleCreateGroup = async (req: Request, res: Response) => {
  try {
    const { name, username } = req.body;
    if (!name || !username)
      return res
        .status(400)
        .json({ error: "Please provide a name and username" });
    const group = await createGroup(name, username);
    res.status(201).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleAddMembersToGroup = async (req: Request, res: Response) => {
  try {
    const { groupId, userIds } = req.body;
    if (!groupId || !userIds)
      return res
        .status(400)
        .json({ error: "Please provide a groupId and userIds" });
    const group = await addMembersToGroup(groupId, userIds);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleRemoveMemberFromGroup = async (req: Request, res: Response) => {
  try {
    const { groupId, userId } = req.body;
    if (!groupId || !userId)
      return res
        .status(400)
        .json({ error: "Please provide a groupId and userId" });
    const group = await removeMemberFromGroup(groupId, userId);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleAddExpenseToGroup = async (req: Request, res: Response) => {
  try {
    const { groupId, expenseId } = req.body;
    if (!groupId || !expenseId)
      return res
        .status(400)
        .json({ error: "Please provide a groupId and expenseId" });
    const group = await addExpenseToGroup(groupId, expenseId);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetGroupById = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    if (!groupId)
      return res.status(400).json({ error: "Please provide a groupId" });
    const group = await getGroupById(groupId);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetGroupByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId)
      return res.status(400).json({ error: "Please provide a userId" });
    const group = await getGroupByUserId(userId);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateGroup = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    const { name } = req.body;
    if (!groupId || !name)
      return res
        .status(400)
        .json({ error: "Please provide a groupId and name" });
    const group = await updateGroup(groupId, name);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleDeleteGroup = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    if (!groupId)
      return res.status(400).json({ error: "Please provide a groupId" });
    const group = await deleteGroup(groupId);
    res.status(200).json({ success: true, group });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const groupRouter = Router();

groupRouter.post("/", handleCreateGroup);
groupRouter.put("/add-members", handleAddMembersToGroup);
groupRouter.put("/remove-member", handleRemoveMemberFromGroup);
groupRouter.put("/add-expense", handleAddExpenseToGroup);
groupRouter.get("/:groupId", handleGetGroupById);
groupRouter.get("/user/:userId", handleGetGroupByUserId);
groupRouter.put("/:groupId", handleUpdateGroup);
groupRouter.delete("/:groupId", handleDeleteGroup);

export default groupRouter;

import Group from "./group.schema";
import User from "../user/user.schema";

export const createGroup = async (name: string, username: string) => {
  const user = await User.findOne({ username });
  const group = await Group.create({ name, members: [user._id] });
  return group;
};

export const addMembersToGroup = async (groupId: string, userIds: string[]) => {
  const group = await Group.findByIdAndUpdate(
    groupId,
    { $push: { members: { $each: userIds } } },
    { new: true }
  );
  return group;
};

export const removeMemberFromGroup = async (
  groupId: string,
  userId: string
) => {
  const group = await Group.findByIdAndUpdate(
    groupId,
    { $pull: { members: userId } },
    { new: true }
  );
  return group;
};

export const addExpenseToGroup = async (groupId: string, expenseId: string) => {
  const group = await Group.findByIdAndUpdate(
    groupId,
    { $push: { expenses: expenseId } },
    { new: true }
  );
  return group;
};

export const getGroupById = async (groupId: string) => {
  const group = await Group.findById(groupId)
    .populate("members")
    .populate("expenses");
  return group;
};

export const getGroupByUserId = async (userId: string) => {
  const group = await Group.find({ members: userId })
    .populate("members")
    .populate("expenses");
  return group;
};

export const updateGroup = async (groupId: string, name: string) => {
  const group = await Group.findByIdAndUpdate(groupId, { name }, { new: true });
  return group;
};

export const deleteGroup = async (groupId: string) => {
  const group = await Group.findByIdAndDelete(groupId);
  return group;
};

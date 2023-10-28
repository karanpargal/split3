import User from "./user.schema";
import { hashPassword, comparePassword } from "../utils/bcrypt";

export const createUser = async (
  username: string,
  password: string,
  walletAddress: string
) => {
  try {
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      username,
      password: hashedPassword,
      walletAddress,
    });

    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await User.find({ username });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateUserById = async (
  id: string,
  walletAddress: string,
  username: string,
  password: string
) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { walletAddress, username, password },
      { new: true }
    );
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteUserById = async (id: string) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByWalletAddress = async (walletAddress: string) => {
  try {
    const user = await User.find({ walletAddress });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const user = await getUserByUsername(username);
    if (!user) throw new Error("User not found");
    const isPasswordMatch = await comparePassword(password, user[0].password);
    if (!isPasswordMatch) throw new Error("Password is not correct");
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

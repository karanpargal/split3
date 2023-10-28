import {
  createUser,
  getUserByUsername,
  updateUserById,
  deleteUserById,
  getUserByWalletAddress,
  loginUser,
} from "./user.service";
import { Request, Response, Router } from "express";
import { hashPassword } from "../utils/bcrypt";

const handleCreateUser = async (req: Request, res: Response) => {
  try {
    const { username, password, walletAddress } = req.body;
    if (!username || !password || !walletAddress) {
      return res.status(400).json({
        success: false,
        error: "Please provide username, password and wallet address",
      });
    }
    const user = await createUser(username, password, walletAddress);
    return res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetUserByUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    if (!username)
      return res
        .status(400)
        .json({ success: false, error: "Please provide username" });
    const user = await getUserByUsername(username);
    if (user.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let { walletAddress, username, password } = req.body;
    if (!id)
      return res
        .status(400)
        .json({ success: false, error: "Please provide id" });

    if (password) {
      password = await hashPassword(password);
    }
    const user = await updateUserById(id, walletAddress, username, password);
    if (user.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleDeleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ success: false, error: "Please provide id" });
    const user = await deleteUserById(id);
    if (user.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetUserByWalletAddress = async (req: Request, res: Response) => {
  try {
    const { walletAddress } = req.params;
    if (!walletAddress)
      return res
        .status(400)
        .json({ success: false, error: "Please provide wallet address" });
    const user = await getUserByWalletAddress(walletAddress);
    if (user.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({
          success: false,
          error: "Please provide username and password",
        });
    const user = await loginUser(username, password);
    if (user.length === 0)
      return res.status(404).json({ success: false, error: "User not found" });
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const userRouter = Router();

userRouter.post("/", handleCreateUser);
userRouter.get("/:username", handleGetUserByUsername);
userRouter.put("/:id", handleUpdateUserById);
userRouter.delete("/:id", handleDeleteUserById);
userRouter.get("/wallet/:walletAddress", handleGetUserByWalletAddress);
userRouter.post("/login", handleLogin);

export default userRouter;

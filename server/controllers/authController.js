import { User } from "../models/index.js";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error();
    }
    const newUser = await User.create({ username, password });
    res.json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.log("no such user");
    }
    const isUser = await bcrypt.compare(password, user.password);
    console.log(isUser);
    if (isUser) {
      res.json({ user });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.json({ error });
  }
};

export { register, login };

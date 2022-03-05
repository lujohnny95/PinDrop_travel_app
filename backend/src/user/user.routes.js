const { Router } = require("express");
const { hashPassword, decryptPassword } = require("../middleware");
const { addUser, logIn, listUser, deleteUser, updateUser, tokenCheck } = require("./user.controllers");

const userRouter = Router();

userRouter.post("/user", addUser, hashPassword);
userRouter.post("/user/login", logIn, decryptPassword);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:username", deleteUser);
userRouter.get("/user", tokenCheck);

module.exports = userRouter;

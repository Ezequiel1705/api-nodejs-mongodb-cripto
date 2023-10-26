import express from 'express';
import authUser from "./authUser.js";

const router = express.Router();

router.use("/auth", authUser)

export default router;
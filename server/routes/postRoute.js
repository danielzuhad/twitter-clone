import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  feedPost,
  getPostByUserId,
  getPostWithComments,
  makePost,
  postComment,
  toggleLike,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/getPostByUserId", verifyToken, getPostByUserId);
router.get("/getPostWithComments", verifyToken, getPostWithComments);
router.get("/feedPost", verifyToken, feedPost);

router.post("/makePost", verifyToken, makePost);
router.post("/toggleLike", verifyToken, toggleLike);
router.post("/postComment", verifyToken, postComment);

export default router;

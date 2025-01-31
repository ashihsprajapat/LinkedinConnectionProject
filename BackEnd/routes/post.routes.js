import { Router } from "express";
import { post } from "../controllers/post.controller.js";
const router=Router();

router.route("/post")
.get(post);

export default router;
import express from "express";

const router = express.Router();

type EmojiResponse = string[];

router.get<object, EmojiResponse>("/", (req, res) => {
  res.json(["😀", "😳", "🙄"]);
});

export default router;

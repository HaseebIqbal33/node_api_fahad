const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

router.post("/login", async (req, res) => {
  try {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const TikTokScraper = require("tiktok-scraper");
const router = express.Router();

const getProfile = router.get("/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  try {
    const user = await TikTokScraper.getUserProfileInfo(username, {});
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

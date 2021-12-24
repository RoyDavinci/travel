const express = require("express");
const {
	createStory,
	getStories,
	getSingleStory,
	updateStory,
	deleteStory,
} = require("../controllers/stories");
const upload = require("../middlewares/image");
const router = express.Router();

router.post("/story", upload.single("photo"), createStory);
router.get("/story", getStories);
router.get("/story/:id", getSingleStory);
router.put("/story/:id", updateStory);
router.delete("/story/:id", deleteStory);

module.exports = router;

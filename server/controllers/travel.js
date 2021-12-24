const db = require("../db/db");

const createPhotos = (req, res) => {
	const { path, filename, originalname } = req.file;
	res.send({ path, filename, originalname });
};

module.exports = { createPhotos };

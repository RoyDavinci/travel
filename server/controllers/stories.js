const db = require("../db/db");

const createStory = async (req, res) => {
	const { location, story, cost, first_name, last_name, title } = req.body;

	try {
		const { rows } = await db.query(
			"INSERT INTO stories(location, story, cost, first_name, last_name, title) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",
			[location, story, cost, first_name, last_name, title]
		);
		res.status(200).json({ message: "Story Created", rows });
	} catch (error) {
		res.status(500).json({ message: "Error on controller", error });
		console.log(error);
	}
};

const getStories = async (req, res) => {
	try {
		const { rows } = await db.query("SELECT * FROM stories");
		res.status(200).json({ message: "Stories gotten", rows });
	} catch (error) {
		res.status(500).json({ message: "Error on controller", error });
	}
};

const getSingleStory = async (req, res) => {
	const id = req.params.id;
	try {
		const { rows } = await db.query("SELECT * FROM stories WHERE id = $1 ", [
			id,
		]);
		res.status(200).json({ message: "Story gotten", rows });
	} catch (error) {
		res.status(500).json({ message: "Error on controller", error });
	}
};

const updateStory = async (req, res) => {
	const id = req.params.id;
	const { location, cost, places, story, first_name, last_name, title } =
		req.body;
	try {
		const { rows } = await db.query(
			"UPDATE stories SET location = $1, cost = $2, story = $3, first_name= $4, last_name= $5, title=$6 WHERE id = $7 RETURNING *",
			[location, cost, story, first_name, last_name, title, id]
		);
		res.status(200).json({ message: "Story Updated", rows });
	} catch (error) {
		res.status(500).json({ message: "Error on controller", error });
	}
};

const deleteStory = async (req, res) => {
	const id = req.params.id;
	try {
		const { rows } = await db.query(
			"DELETE FROM stories WHERE id = $1 RETURNING *",
			[id]
		);
		res.status(200).json({ message: "Story Updated", rows });
	} catch (error) {
		res.status(500).json({ message: "Error on controller", error });
	}
};

module.exports = {
	createStory,
	getStories,
	getSingleStory,
	updateStory,
	deleteStory,
};

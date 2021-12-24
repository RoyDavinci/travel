const db = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
	const { username, password, email } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		let data = await db.query(
			"INSERT INTO users (username, password, email) VALUES($1, $2, $3) RETURNING *",
			[username, hashedPassword, email]
		);
		const token = jwt.sign(
			{ data: data.rows[0].user_id },
			process.env.SECRET_KEY,
			{ expiresIn: "1d" }
		);

		res.status(200).json({
			message: "User Created successfully",
			name: data.rows[0].username,
			id: data.rows[0].user_id,
			token,
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "error on controller", error: error.detail });
	}
};

const login = async (req, res) => {
	const { password, username, email } = req.body;

	const query = {
		name: "fetch-user",
		text: "SELECT * FROM users WHERE username = $1 OR email = $2",
		values: [username, email],
	};
	// callback
	try {
		db.query(query, async (err, result) => {
			if (result.rows.length < 1) {
				res.json({
					message: "Username or Email Incorrect",
				});
			} else {
				const success = await bcrypt.compare(password, result.rows[0].password);
				const token = jwt.sign(
					{ result: result.rows[0].user_id },
					process.env.SECRET_KEY,
					{ expiresIn: "1d" }
				);
				if (success) {
					res.status(200).json({
						message: "User Login successfully",
						name: result.rows[0].username,
						id: result.rows[0].user_id,
						token,
					});
				} else {
					res.json({ message: "Incorrect Password" });
				}
			}
		});
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error on controller", error: error.detail });
	}
};
const getUser = async (req, res) => {
	const { username } = req.body;
	try {
		let data = await db.query("SELECT * FROM users WHERE username = $1", [
			username,
		]);
		res.status(200).json({ message: "User Gotten successfully", data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "error on controller", error });
	}
};

module.exports = { createUser, getUser, login };

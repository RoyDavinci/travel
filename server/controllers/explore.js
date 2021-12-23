const baseUrl = "https://restcountries.com/v3.1";
const axios = require("axios").default;

const getAllCountries = async (req, res) => {
	try {
		const { data } = await axios.get(`${baseUrl}/all`);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};

const getCountrybyName = async (req, res) => {
	const { name } = req.body;

	try {
		const { data } = await axios.get(`${baseUrl}/name/${name}`);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};
const getCountrybyCapital = async (req, res) => {
	const { capital } = req.body;

	try {
		const { data } = await axios.get(`${baseUrl}/capital/${capital}`);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};
const getCountryByRegion = async (req, res) => {
	const { region } = req.body;
	try {
		const { data } = await axios.get(`${baseUrl}/region/${region}`);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = {
	getAllCountries,
	getCountrybyName,
	getCountrybyCapital,
	getCountryByRegion,
};

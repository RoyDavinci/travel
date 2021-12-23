const express = require("express");
const {
	getAllCountries,
	getCountrybyName,
	getCountrybyCapital,
	getCountryByRegion,
} = require("../controllers/explore");
const router = express.Router();

router.get("/countries", getAllCountries);
router.post("/country", getCountrybyName);
router.get("/country/capital", getCountrybyCapital);
router.get("/country/region", getCountryByRegion);

module.exports = router;

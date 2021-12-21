const express = require("express");
const storyRouter = require("./routes/stories");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4300;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/v1", storyRouter);

app.listen(PORT, function () {
	console.log(`App listening on http://localhost:${PORT}`);
});

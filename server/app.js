const express = require("express");
const storyRouter = require("./routes/stories");
const countryRouter = require("./routes/explore");
const userRouter = require("./routes/users");
const photoRouter = require("./routes/travel");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4300;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", storyRouter);
app.use("/api/v2", countryRouter);
app.use("/api/v3", userRouter);
app.use("/api/v4", photoRouter);

app.listen(PORT, function () {
	console.log(`App listening on http://localhost:${PORT}`);
});

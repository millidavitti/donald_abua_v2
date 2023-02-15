const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	role: String,
	date: {
		start: String,
		end: String,
	},
	contributions: [Strings],
});

module.exports =
	mongoose.models.Experience || mongoose.model("Experience", schema);

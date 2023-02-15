const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	description: String,
	tools: [String],
	github: String,
	projectLink: String,
	thumb: String,
});

module.exports =
	mongoose.models.FeatureProjects || mongoose.model("FeatureProjects", schema);

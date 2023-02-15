const mongoose = reuqire("mongoose");

const schema = new mongoose.Schema({
	name: String,
	description: String,
	tools: [String],
	projectLink: String,
});

module.exports =
	mongoose.models.OtherProjects || mongoose.model("OtherProjects", schema);

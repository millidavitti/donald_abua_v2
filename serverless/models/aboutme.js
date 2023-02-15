const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	aboutme: String,
	toolChain: [String],
	photo: String,
});

module.exports = mongoose.models.About || mongoose.model("About", schema);

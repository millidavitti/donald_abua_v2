const express = require("express");
const connectdb = require("../../serverless/db/connect");
const otherProjectsDB = require("../../serverless/models/otherProjects.mongo");

const api = express();

export default api.get("/api/otherprojects", async (req, res) => {
	connectdb();

	const otherProjects = otherProjectsDB.find({}, { __v: 0 });

	res.json(otherProjects);
});

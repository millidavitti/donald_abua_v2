const express = require("express");
const connectdb = require("../../serverless/db/connect");
const landingPageTemplatesDB = require("../../serverless/models/landingPageTemplates.mongo");

const api = express();

export default api.get("/api/landingPageTemplates", async (req, res) => {
	connectdb();

	const landingPageTemplates = await landingPageTemplatesDB.find(
		{},
		{ __v: 0 },
	);

	res.json(landingPageTemplates);
});

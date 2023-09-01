import connectdb from "../db/connect";
import landingPageTemplatesDB from "../models/landingPageTemplates.mongo";
export default async function landingPageTemplatesController() {
	connectdb();

	const others = await landingPageTemplatesDB.find({}, { __v: 0 });

	return JSON.stringify(others);
}

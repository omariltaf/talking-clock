import express from "express";
import { TalkingClock } from "../clock/clock";

const app = express();
const port = 3000;

app.get("/human-time", (req, res) => {
	try {
		const { time } = req.query;

		const talkingClock = new TalkingClock();
		const humanTime = talkingClock.getHumanTime(`${time}`);
		res.status(200).send({ humanTime });
	} catch (error: any) {
		console.log(`🙀 Error: ${error.message}`);
		res.status(400).send({ error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});

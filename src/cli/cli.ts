import { TalkingClock } from "../clock/clock";

try {
	const args = process.argv.slice(2);
	const time = args[0];

	const talkingClock = new TalkingClock();
	const humanTime = talkingClock.getHumanTime(time);
	console.log(humanTime);
} catch (error: any) {
	console.log(`🙀 Error: ${error.message} `);
}

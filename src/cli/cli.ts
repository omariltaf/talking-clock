import { TalkingClock } from "../clock/clock";

// remember to validate inputs for obj 2/3

const args = process.argv.slice(2);
const time = args[0];
const talkingClock = new TalkingClock();
const humanTime = talkingClock.getHumanTime(time);

console.log(humanTime);

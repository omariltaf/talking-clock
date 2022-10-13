// import { jest } from "@jest/globals";

import { TalkingClock } from "../src/clock";

describe("src/clock", () => {
	describe("getHumanTime", () => {
		it("should get human time for times on the hour", () => {
			// Given
			const time = "11:00";
			const talkingClock = new TalkingClock();
			// When
			const result = talkingClock.getHumanTime(time);
			// Then
			expect(result).toEqual("Eleven o'clock");
		});

		it("should get human time for times within the first half hour", () => {
			// Given
			const time = "11:22";
			const talkingClock = new TalkingClock();
			// When
			const result = talkingClock.getHumanTime(time);
			// Then
			expect(result).toEqual("Twenty-two past eleven");
		});

		it("should get human time for times on the half hour", () => {
			// Given
			const time = "11:30";
			const talkingClock = new TalkingClock();
			// When
			const result = talkingClock.getHumanTime(time);
			// Then
			expect(result).toEqual("Half past eleven");
		});

		it("should get human time for times after the half hour", () => {
			// Given
			const time = "11:44";
			const talkingClock = new TalkingClock();
			// When
			const result = talkingClock.getHumanTime(time);
			// Then
			expect(result).toEqual("Sixteen to twelve");
		});

		it("should get human time for 24-hour times", () => {
			// Given
			const time = "23:44";
			const talkingClock = new TalkingClock();
			// When
			const result = talkingClock.getHumanTime(time);
			// Then
			expect(result).toEqual("Sixteen to twelve");
		});

		it("should error when provided time is invalid", () => {
			// Given
			const time = "Hello I am not a valid time!";
			const talkingClock = new TalkingClock();
			// When
			// Then
			expect(() => talkingClock.getHumanTime(time)).toThrow(
				"Invalid time provided"
			);
		});

		it("should error when provided hour is invalid", () => {
			// Given
			const time = "-999:10";
			const talkingClock = new TalkingClock();
			// When
			// Then
			expect(() => talkingClock.getHumanTime(time)).toThrow(
				"Invalid hour provided"
			);
		});

		it("should error when provided minute is invalid", () => {
			// Given
			const time = "15:999";
			const talkingClock = new TalkingClock();
			// When
			// Then
			expect(() => talkingClock.getHumanTime(time)).toThrow(
				"Invalid minute provided"
			);
		});

		it("should default to current human time when no time is provided", () => {
			// Given
			const talkingClock = new TalkingClock();
			// When
			const result = talkingClock.getHumanTime();
			// Then
			expect(result).toEqual(expect.any(String));
		});
	});
});

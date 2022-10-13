import converter from "number-to-words";

export class TalkingClock {
	getHumanTime(time?: string): string {
		try {
			const { hour, minute } = time
				? this.getHourAndMinuteFromProvidedTime(time)
				: this.getHourAndMinuteFromCurrentTime();
			return this.determineHumanTime(hour, minute);
		} catch (error: any) {
			return `Error: ${error.message}`;
		}
	}

	private checkValidHourAndMinute(hour: number, minute: number) {
		if (!hour || hour < 0 || hour > 23) {
			throw new Error("Invalid hour provided");
		}
		if (!minute || minute < 0 || minute > 59) {
			throw new Error("Invalid minute provided");
		}
	}

	private getHourAndMinuteFromProvidedTime(time: string): {
		hour: number;
		minute: number;
	} {
		const [hour, minute] = time.split(":").map((str) => Number(str));
		this.checkValidHourAndMinute(hour, minute);
		return {
			hour,
			minute,
		};
	}

	private getHourAndMinuteFromCurrentTime(): { hour: number; minute: number } {
		const currentDate = new Date();
		return {
			hour: currentDate.getHours(),
			minute: currentDate.getMinutes(),
		};
	}

	private determineHumanTime(hour: number, minute: number): string {
		let humanTime = "";
		const convertedHour = this.convertToTwelveHourTime(hour);
		if (minute === 0) {
			humanTime += `${this.numberToWord(convertedHour)} o'clock`;
		} else if (minute < 30) {
			humanTime += `${this.numberToWord(minute)} past ${this.numberToWord(
				convertedHour
			)}`;
		} else if (minute === 30) {
			humanTime += `half past ${this.numberToWord(convertedHour)}`;
		} else {
			const convertedNextHour = this.convertToTwelveHourTime(hour + 1);
			const minutesToNextHour = 60 - minute;
			humanTime += `${this.numberToWord(
				minutesToNextHour
			)} to ${this.numberToWord(convertedNextHour)}`;
		}

		if (!humanTime) {
			throw new Error("Human Time cannot be determined");
		}

		return this.capitaliseFirstLetter(humanTime);
	}

	private convertToTwelveHourTime(hour: number) {
		const modulo = hour % 12;
		return modulo === 0 ? 12 : modulo;
	}

	private numberToWord(number: number): string {
		return converter.toWords(number);
	}

	private capitaliseFirstLetter(text: string): string {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
}

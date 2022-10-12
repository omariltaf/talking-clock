import converter from "number-to-words";

export class TalkingClock {
	getHumanTime(time?: string): string {
		try {
			const { hour, minute } = time
				? this.getHourAndMinute(time)
				: this.getCurrentHourAndMinute();
			return this.determineHumanTime(hour, minute);
		} catch (error: any) {
			return `Error: ${error.message}`;
		}
	}

	private getHourAndMinute(time: string): { hour: number; minute: number } {
		const hourAndMinute = time.split(":");
		return {
			hour: Number(hourAndMinute[0]),
			minute: Number(hourAndMinute[1]),
		};
	}

	private getCurrentHourAndMinute(): { hour: number; minute: number } {
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

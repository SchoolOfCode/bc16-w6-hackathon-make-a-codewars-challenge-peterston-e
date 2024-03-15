import { getDomainName } from "./main.js";
import { expect, test, assert } from "vitest";

test("domain without www.", () => {
	// arrange
	const url = "https://stackoverflow.com";
	const expected = "stackoverflow";
	// actual
	const actual = getDomainName(url);
	// assert
	expect(actual).toBe(expected);
});

test("domain with www.", () => {
	// arrange
	const url = "https://www.stackoverflow.com";
	const expected = "stackoverflow";
	// actual
	const actual = getDomainName(url);
	// assert
	expect(actual).toBe(expected);
});

test("domain with .co.uk", () => {
	// arrange
	const url = "https://www.amazon.co.uk";
	const expected = "amazon";
	// actual
	const actual = getDomainName(url);
	// assert
	expect(actual).toBe(expected);
});

test("domain with a hyphen and .xyz TLD", () => {
	// arrange
	const url = "https://www.games-workshop.xyz";
	const expected = "games-workshop";
	// actual
	const actual = getDomainName(url);
	// assert
	expect(actual).toBe(expected);
});

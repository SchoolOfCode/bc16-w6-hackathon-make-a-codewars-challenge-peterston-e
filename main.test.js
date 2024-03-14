import { getDomainName } from "./main.js";
import { expect, test, assert } from "vitest";

test("Should pass", () => {
	// arrange
	const url = "https://stackoverflow.com";
	const expected = "stackoverflow";
	// actual
	const actual = getDomainName(url);
	// assert
	expect(actual).toBe(expected);
});

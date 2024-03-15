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

test("domain with subdomains", () => {
	// arrange
	const url = "https://wikipedia.org/wiki/URL";
	const expected = "wikipedia";
	// actual
	const actual = getDomainName(url);
	console.log(actual);
	// assert
	expect(actual).toBe(expected);
});

test.each([
	["https://www.plotaroute.com", "plotaroute"],
	["https://www.ycn.asia/owner-ca", "ycn"],
	["https://www.example1.com/path", "example1"],
	["https://example2.org/page", "example2"],
	["https://www.test3.net/home", "test3"],
	["https://example4.co.uk/about", "example4"],
	["https://www.demo5.io/contact", "demo5"],
	["https://example6.com/products", "example6"],
	["https://www.test7.org/services", "test7"],
	["https://example8.net/about-us", "example8"],
	["https://www.demo9.co.uk/about", "demo9"],
	["https://example10.io/contact", "example10"],
	["https://www.test11.com/home", "test11"],
	["https://example12.org/about", "example12"],
	["https://www.demo13.net/products", "demo13"],
	["https://example14.co.uk/services", "example14"],
	["https://www.test15.io/about-us", "test15"],
	["https://example16.com/contact", "example16"],
	["https://www.demo17.org/path", "demo17"],
	["https://example18.net/page", "example18"],
	["https://www.test19.co.uk/home", "test19"],
	["https://example20.io/about", "example20"],
])(`%s should return %s`, (url, expected) => {
	const actual = getDomainName(url);
	expect(actual).toBe(expected);
});

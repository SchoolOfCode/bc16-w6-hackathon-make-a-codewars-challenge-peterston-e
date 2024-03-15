/**
 * Hello bootcampers! Your challenge should you choose to accept it
 * is to write a function named `getDomainName` which takes in a URL
 * in the form of a string and returns only the domain name from that
 * string.
 *
 * Your implementation should handle strings whose length is between 0 (inclusive) and 2500 (inclusive).
 *
 * A few examples:
 * 'https://www.google.com' should return only 'google' as a string.
 * 'http://my-blog.xyz' should return only 'my-blog'
 * 'https://amazon.co.uk' should return only 'amazon'
 *
 * For this challenge it wil be super useful if you familiarise yourself with
 * regular expressions (regex).
 *
 * This website will be super helpful https://regexr.com/
 *
 * Happy coding !
 */

export function getDomainName(url) {
	let domain = url.replace(/(?:https?:\/\/)/, "");
	domain = domain.replace(/^(?:[^@\n]+@)/, "");
	domain = domain.replace(/^(?:www\.)/, "");
	domain = domain.replace(/\.\w+.*$/, "");
	return domain;
}

// export function getDomainName(url) {
// 	// get hacking!
// 	return ""; // domain
// }

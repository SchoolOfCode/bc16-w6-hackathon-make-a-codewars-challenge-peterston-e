// /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/.

/*
^ asserts start of a string 
(?:https?:\/\/)? matches username part if present
(?:www\.)? matches the www. part of the domain.
([^:\/\n]+) captures the domain name. any characters that are not : / or newline \n
/\.\w+.*$/ catches the . with trailing words and any repetition of it.
*/

/*
(?:...) - non capture group.  It allows you to group the characters together 
without capturing the matched text

https?: - This part matches "http" followed by an optional "s". 
The ? quantifier makes the "s" optional, allowing the pattern to match both "http" and "https".

:\/\/: This part matches the characters "://", which are typically found in URLs 
to separate the protocol (like "http" or "https") from the rest of the URL.
*/
function getDomainName(url) {
	let domain = url.replace(/(?:https?:\/\/)/, "");
	domain = domain.replace(/^(?:[^@\n]+@)/, "");
	domain = domain.replace(/^(?:www\.)/, "");
	domain = domain.replace(/\.\w+.*$/, "");
	return domain;
}

console.log(getDomainName("https://stackoverflow.com"));

// How do you remove whitespaces from both ends of a string?

const strName = ' Hello Javascript World ';
const removeStrSpaces = strName.trim();
console.log('Removed spaces from the string result is:', removeStrSpaces);

/**
 * .trim() uses to remove the whitespaces start and end of the string
 *  However, trim() does not remove whitespace from within the string (i.e., the middle ones).
 */

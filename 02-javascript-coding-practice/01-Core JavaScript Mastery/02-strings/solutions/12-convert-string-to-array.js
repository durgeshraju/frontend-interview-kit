// convert a string to an array?

const strValue = 'Hello JS world';
const convertStrToArray = strValue;
console.log(
  `Converted string to array result is : ${convertStrToArray.split(' ').length}`
);
/*
 Bascially split is converting given strValue to array elements..

.split('') splits by every character.
.split(' ') splits by spaces and keeps the segments.
.split() splits by spaces but handles multiple consecutive spaces more gracefully.
*/

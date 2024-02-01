let date = new Date();
console.log(date); // displays: 2024-01-30T17:08:54.357Z
console.log(date.toString()) // displays: Tue Jan 30 2024 22:39:26 GMT+0530 (India Standard Time)
console.log(date.toDateString()) // displays: Tue Jan 30 2024
console.log(date.toLocaleDateString()); // displays: 30/1/2024
console.log(date.toLocaleString()); // displays: 30/1/2024, 10:40:28 pm
console.log(date.toLocaleTimeString()); // displays: 10:40:51 pm
console.log(date.toTimeString()); // displays: 22:42:47 GMT+0530 (India Standard Time)
console.log(date.toISOString()); // displays: 2024-01-30T17:12:47.850Z
console.log(date.toUTCString()); // displays: Tue, 30 Jan 2024 17:12:47 GMT
console.log(date.toJSON()); // displays: 2024-01-30T17:12:47.850Z // looks same as ISOString

// type of object is Date

let newDate = new Date(2024, 0, 23);
let thisDate = new Date(2024, 2, 31, 3, 9, 8, 2); // till millisec
let aDate = new Date("2024-04-21"); // different formats, but
let anotherDate = new Date("04-21-2024"); // same values
console.log(newDate.toLocaleDateString()); // displays: 23/1/2024
console.log(thisDate.toLocaleString());
console.log(aDate.toLocaleDateString());
console.log(anotherDate.toLocaleString());
let timeStamp = Date.now();
console.log(timeStamp); // returns the value of milliseconds passed since January 1, 1970

console.log(anotherDate.getTime()); // time passed since January 1, 1970 to custom date object // nice
console.log(Math.floor(Date.now() / 100)); // converted to seconds
// note that getmonth returns index of month (0-indexed)

console.log(aDate.toLocaleString("default", {
    weekday: "short" // narrow prints initial of dayname, and short prints 3-lettered name
}));


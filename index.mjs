/* eslint no-console: 0 */

import emarsys from './calculateDueDate/config.js';
import getDayString from './calculateDueDate/modules/getDayString.js';
import CalculateDueDate from './calculateDueDate/calculateDueDate.js';

// Try out with different date, just modify the submit variable
const submit = new Date('July 3 2018 10:30');

console.log(`
    submitted: ${submit},
    working hours: ${emarsys.hours.start}h - ${emarsys.hours.end}h,
    working days: ${getDayString[emarsys.week.start]} - ${getDayString[emarsys.week.end]},
    turnaround: 32h
    ⏳ due date is: ${CalculateDueDate(32, emarsys, submit)}
`);

// If you don't specify a submit date, it defaults to now
// console.log(`
//     If you don't specify a submit date, it defaults to now
//     ${CalculateDueDate(41, emarsys)}
// `);

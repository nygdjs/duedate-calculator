import getDayString from './getDayString.js';
/**
 * Returns a string template literal to warn user if entered
 * a date for start outside of working hours.
 * Dynamically populated from working hours config object.
 *
 * @param {Object} working a object of working hours and days
 *                         (see eg. ./config.js)
 * @returns {string} Warning message for eg. logging in console
 */

const hoursWarning = working => `
    Looks like someone is doing overtime... 💪
    Seriously...
    You entered a start date, that is outside of working hours.
    Please set something between ${working.hours.start} - ${working.hours.end} hours and ${getDayString[working.week.start]} - ${getDayString[working.week.end]}.
    Ooor take some rest, grab a beer and come back tomorrow in working hours.🤓
`;

export default hoursWarning;

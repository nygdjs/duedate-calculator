/**
 * Returns true or false depending on if the input
 * date object is representing a moment in range of
 * working hours and working week days.
 *
 * @param {Object} time a JS Date object you want to check
 * @param {Object} working config object of working hours and days
 *                         (see eg. ./config.js)
 * @returns {boolean} true if inside working hours range
 */
const isWorkingHours = (time, working) => {
    const hour = time.getHours();
    const day = time.getDay();
    if (
        hour >= working.hours.start &&
        hour < working.hours.end &&
        day >= working.week.start &&
        day <= working.week.end
    ) {
        return true;
    }
    return false;
};

export default isWorkingHours;

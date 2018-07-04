import isWorkingHours from './modules/isWorkingHours.js';
import hoursWarning from './modules/hoursWarning.js';

/**
 * Returns the due date calculated from the start date and the
 * turnaround value (given in hours as numbers),
 * respecting the working hours.
 *
 * @param {number} turnaround the work-hours needed for the job
 * @param {Object} workHours a object of working hours and days
 *                          (see eg. ./modules/config.js)
 * @param {Object} submitDate a JS Date object of the start date
 *                            defaults to now
 * @returns {Object} the date when the issue is due
 */
function CalculateDueDate(turnaround, workHours, submitDate = new Date()) {
    if (isWorkingHours(submitDate, workHours) === false) {
        console.log(hoursWarning(workHours));
    } else {
        const dueDate = submitDate.setHours(submitDate.getHours() + turnaround);
        console.log(dueDate);
        console.log(submitDate);
        return new Date(dueDate);
    }
}

export default CalculateDueDate;

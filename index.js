import isWorkingHours from './modules/isWorkingHours';
import hoursWarning from './modules/hoursWarning';
import emarsys from './modules/config';

/**
 * Returns the due date calculated from the start date and the
 * turnaround value (given in hours), with respect of the
 * working hours.
 *
 * @param {number} turnaround the work-hours needed for the job
 * @param {Object} workHours a object of working hours and days
 *                          (see eg. ./modules/config.js)
 * @param {Object} submitDate a JS Date object of the start date
 *                            defaults to now
 * @returns {Object} the date when the issue is due
 */
const CalculateDueDate = (turnaround, workHours, submitDate = new Date()) => {
    if (isWorkingHours(submitDate, workHours) === false) {
        console.log(hoursWarning(workHours));
    } else {
        const dueDate = submitDate.setHours(submitDate.getHours() + turnaround);
        console.log(dueDate);
        console.log(submitDate);
        return dueDate;
    }
};

console.log(CalculateDueDate(16, emarsys));

// TODO: handle case of 17:01 is working hours
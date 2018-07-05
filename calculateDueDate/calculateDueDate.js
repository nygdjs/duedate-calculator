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
    // Check if the submitDate is in working hours
    // and turnaround is entered as number
    // and log a warning message if not
    if (isWorkingHours(submitDate, workHours) === false) {
        console.log(hoursWarning(workHours));
    } else if (typeof turnaround !== 'number') {
        console.log('Please enter turnaround hours as a plain number.');
    } else {
        // Create new Date object, to avoid mutating incoming param
        const dueDate = new Date(submitDate);

        /**
         * Loop through the number of turnaround hours and
         * [1] increase hours in the dueDate object,
         * [2] except if it is later than workday end
         *     in this case skip to next day and start
         *     from workday start
         * [3] or it is not a workday
         *     in this case skip to next workweek start
         *     and start from workday start
         */
        for (let i = 0; i < turnaround; i += 1) {
            dueDate.setHours(dueDate.getHours() + 1); // [1]

            if (dueDate.getHours() >= workHours.hours.end) { // [2]
                if (dueDate.getDay() === workHours.week.end) { // [3]
                    dueDate.setDate(dueDate.getDate() + 3);
                } else {
                    dueDate.setDate(dueDate.getDate() + 1);
                }
                dueDate.setHours(workHours.hours.start);
            }
        }
        return dueDate;
    }
}

export default CalculateDueDate;

import emarsys from './calculateDueDate/config.js';
import CalculateDueDate from './calculateDueDate/index.js';
const testDate5 = new Date('July 3 2018 10:30');

console.log(CalculateDueDate(16, emarsys, testDate5));

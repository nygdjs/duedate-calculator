import emarsys from './calculateDueDate/config.js';
import CalculateDueDate from './calculateDueDate/calculateDueDate.js';


const submit = new Date('July 3 2018 10:30');

console.log(CalculateDueDate(32, emarsys, submit));

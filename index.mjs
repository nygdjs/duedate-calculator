import emarsys from './calculateDueDate/config.js';
import CalculateDueDate from './calculateDueDate/index.js';


const submit = new Date('July 3 2018 10:30');

console.log(CalculateDueDate(41, emarsys, submit));

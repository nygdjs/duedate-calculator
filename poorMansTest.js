import isWorkingHours from './modules/isWorkingHours';

const testDate1 = new Date('July 3 2018 13:30');
const testDate2 = new Date('July 3 2018 8:59');
const testDate3 = new Date('July 3 2018 17:01');
const testDate4 = new Date('July 3 2018 8:30');
const testDate5 = new Date('July 3 2018 20:30');
const testDate6 = new Date('July 1 2018 12:30');
const testDate7 = new Date('July 1 2018 19:30');
const testDate8 = new Date('July 1 2018 8:30');
console.log(`1: ${testDate1} : ${isWorkingHours(testDate1)}`);
console.log(`2: ${testDate2} : ${isWorkingHours(testDate2)}`);
console.log(`3: ${testDate3} : ${isWorkingHours(testDate3)}`);
console.log(`4: ${testDate4} : ${isWorkingHours(testDate4)}`);
console.log(`5: ${testDate5} : ${isWorkingHours(testDate5)}`);
console.log(`6: ${testDate6} : ${isWorkingHours(testDate6)}`);
console.log(`7: ${testDate7} : ${isWorkingHours(testDate7)}`);
console.log(`8: ${testDate8} : ${isWorkingHours(testDate8)}`);
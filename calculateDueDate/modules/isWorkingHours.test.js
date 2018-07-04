import isWorkingHours from './isWorkingHours.js';
import emarsys from '../config';

const testDate1 = new Date('July 3 2018 13:30');
const testDate2 = new Date('July 3 2018 8:59');
const testDate3 = new Date('July 3 2018 17:01');
const testDate4 = new Date('July 3 2018 8:30');
const testDate5 = new Date('July 3 2018 20:30');
const testDate6 = new Date('July 1 2018 12:30');
const testDate7 = new Date('July 1 2018 19:30');
const testDate8 = new Date('July 1 2018 8:30');

test('July 3 2018 13:30 is in working hours in Emarsys', () => {
    expect(isWorkingHours(testDate1, emarsys)).toBe(true);
});

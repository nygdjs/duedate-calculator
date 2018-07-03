import emarsys from './config';

const hoursWarning = `
    It looks like someone is doing overtime... 💪
    Seriously...
    You entered a start date, that is outside of working hours.
    Please set something between ${emarsys.hours.start} - ${emarsys.hours.end} hours
    and 
`;

export default hoursWarning;
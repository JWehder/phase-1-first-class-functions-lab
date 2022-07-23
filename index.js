// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = arr => arr.slice(0,2);

console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = arr => arr.slice(2);

console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int) {
    return fare => fare * int;
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === selectingDrivers[0]) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if (func === selectingDrivers[1]) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}

console.log(createFareMultiplier(2)(2));

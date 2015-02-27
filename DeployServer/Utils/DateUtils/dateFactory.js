/**
 * Created by Blake Gideon on 11/10/14.
 */


var TWO_WEEKS_MILLISEC = 1209600000;
var ONE_WEEK_MILLISEC = 6.048e+8;
var TWO_DAYS_MILLISEC = 172800000;
var ONE_DAY_MILLISEC = 8.64e+7;
var TWO_HOURS_MILLISEC = 7200000;
var ONE_HOUR_MILLISEC = 3.6e+6;
var PRESENT = 0;
var ONE_MONTH = 2.62974e9;
var TWO_MONTHS = ONE_MONTH*2;

//!ONLY ADD TO THE END OF THIS ARRAY!!!!!!
//!OTHERWISE THE TESTS WILL BREAK!!!!!!!!!
//!!It is safe to add after one hour.!!!!!
var regularSchedule = [
    TWO_WEEKS_MILLISEC,
    ONE_WEEK_MILLISEC,
    TWO_DAYS_MILLISEC,
    ONE_DAY_MILLISEC,
    TWO_HOURS_MILLISEC,
    ONE_HOUR_MILLISEC,
    ONE_MONTH,
    TWO_MONTHS];
    //PRESENT];

/*
*    Complete date plus hours and minutes:
*    YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)
*
* */

/**
 * Calculates a Date prior based on an offset
 *
 * @param {Date} date
 * @param {Number} milliseconds to subract from date
 * */
function priorDateFromDiff(date,offset) {
    var priorDate,
        dateMilli = date.getTime();
    priorDate = new Date(dateMilli-offset);
    return priorDate;
}


/**
 * According to an offset schedule, prior recurrences are generated for a date.
 *
 * @param {Array[Number]} offsets -
 * @param {Date} date
 * @returns {Set} dates
 */
function generateBackwardsDateSet(date, offsets) {
    var backwardsDates = [];

    offsets.forEach(function(offset) {
        backwardsDates.push(priorDateFromDiff(date,offset))
    })

    return backwardsDates;
}

/**
 * Returns a List of Dates based on the standard back-schedule
 *
 * @param {Date} date
 */
function getReqularBackSchedule(date) {
    return generateBackwardsDateSet(date,regularSchedule);

}

module.exports.getRegularBackwardsSchedule = getReqularBackSchedule;
module.exports.generateBackwardsDateList = generateBackwardsDateSet;
module.exports.regularSchedule = regularSchedule;



//Give a date of an event

//calculate each prior date to remind on

//set a cron job for each date to register a function

//create a function to pass in the cron job, a twilio alert....
/**
 * Created by bjg on 11/13/14.
 */

var assert = require('assert');
var dateFactory = require('./dateFactory');


var testDate = new Date('March 13, 2015 11:00:00');
var newDates = dateFactory.generateBackwardsDateList(testDate,dateFactory.regularSchedule)

var isPresent = newDates[6].toString();
var testDateStr = testDate.toString();
assert.deepEqual(isPresent,testDateStr, "Present date is incorrectly adjusted by .generateBackwardsDateList");

var oneHourBeore = "Fri Mar 13 2015 10:00:00 GMT-0500 (CDT)";
var testDate1hr = newDates[5].toString();
assert.deepEqual(oneHourBeore,testDate1hr, "One Hour before is incorrectly adjusted by .generateBackwardsDateList\n" +
                        "Expected:\n" + oneHourBeore + ", Actual: \n" + testDate1hr);

var twoHoursBefore = "Fri Mar 13 2015 09:00:00 GMT-0500 (CDT)";
var testDate2hr = newDates[4].toString();
assert.deepEqual(twoHoursBefore,testDate2hr, "Two Hours before is incorrectly adjusted by .generateBackwardsDateList\n" +
"Expected:\n" + twoHoursBefore + ", Actual: \n" + testDate2hr);

var oneDayBefore = "Thu Mar 12 2015 11:00:00 GMT-0500 (CDT)";
var testDateOneDay = newDates[3].toString();
assert.deepEqual(oneDayBefore,testDateOneDay, "One day before is incorrectly adjusted by .generateBackwardsDateList\n" +
"Expected:\n" + oneDayBefore + ", Actual: \n" + testDateOneDay);

var twoDaysBefore = "Wed Mar 11 2015 11:00:00 GMT-0500 (CDT)";
var testDateTwoDays = newDates[2].toString();
assert.deepEqual(twoDaysBefore,testDateTwoDays, "One day before is incorrectly adjusted by .generateBackwardsDateList\n" +
"Expected:\n" + twoDaysBefore + ", Actual: \n" + testDateTwoDays);

var oneWeekBefore = "Fri Mar 06 2015 10:00:00 GMT-0600 (CST)"  //DST - Daylight Savings Time... didn't choose the most intuitive time period to test.
var testOneWeek = newDates[1].toString();
assert.deepEqual(oneWeekBefore,testOneWeek, "One Week before is incorrectly adjusted by .generateBackwardsDateList\n" +
"Expected:\n" + oneWeekBefore + ", Actual: \n" + testOneWeek);

var twoWeeksBefore = "Fri Feb 27 2015 10:00:00 GMT-0600 (CST)"
var testTwoWeeks = newDates[0].toString();
assert.deepEqual(twoWeeksBefore,testTwoWeeks, "One Week before is incorrectly adjusted by .generateBackwardsDateList\n" +
"Expected:\n" + twoWeeksBefore + ", Actual: \n" + testTwoWeeks);

process.stdout.write("\n\nComputing previous dates from a future date has passed all functual tests.\n\n");

//process.stdout.write(newDates.toString());


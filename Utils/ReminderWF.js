var DateTools = require('./DateUtils/dateFactory')
var SmsTools = require('./SmsUtils/TwilSms')
var CronJob = require('cron').CronJob;

function composeMessage(eventName,originTime,reminderTime) {
    return ('REMINDER: You are scheduled for ' + eventName + ' at ' + originTime.toString() + '\nDontForget!'
    /*Only for Testing*/+ '\nDid this arrive at ' + reminderTime.toString() + '?'
    )
}


function quickReminder(reminderObj) {

    var appointmentTime = new Date(reminderObj.time);
    var reminderPool = DateTools.generateBackwardsDateList(appointmentTime,reminderObj.offsets);

    var job = new CronJob(reminderPool[0],
                            SmsTools.callableSendSMS(reminderObj.originNumber,
                                composeMessage(reminderObj.eventName,
                                    reminderObj.time,
                                    reminderPool[0])),
                            null,true);

    return reminderPool[0];
}


function isFuture(dateTime) {
    if (dateTime <= Date.now()) {return false;}
    else {return true;}
}

function createAllReminders(eventParams) {
    //Debug create two Reminders as a simple test
    //Should send a message one and three minutes before
    var miniTestTimes = [6000,180000];


    //Production, use regular schedule.
    var reminderTime = 0;
    //DateTools.regularSchedule.forEach(function(timeOffset) {
    miniTestTimes.forEach(function(timeOffset) {
        var job;
        reminderTime = new Date(eventParams.appointmentTime - timeOffset);

        job = new CronJob(reminderTime,
                                SmsTools.callableSendSMS(eventParams.originNumber,
                                            composeMessage(eventParams.eventName,
                                                        eventParams.appointmentTime,
                                                        reminderTime)
                                                                                    ),
                            null, true);
    });
}

module.exports.singleReminder = quickReminder;
module.exports.spawnReminders = createAllReminders;
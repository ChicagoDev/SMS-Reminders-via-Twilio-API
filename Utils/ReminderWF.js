var DateTools = require('./DateUtils/dateFactory')
var SmsTools = require('./SmsUtils/TwilSms')
var CronJob = require('cron').CronJob;

function composeMessage(eventName,originTime,reminderTime) {
    return ('REMINDER: You are scheduled for ' + eventName + ' at ' + originTime.toString() + '\nDontForget!'
    /*Only for Testing*/+ '\nDid this arrive at ' + reminderTime.toString() + '?'
    )
}


function quickReminder(time,eventName,offset,phoneNumber) {

    //Create object only to potentially in the future store a record in a DB
    var reminder = {
        time: new Date(time),
        eventName: eventName,
        offset: offset
    };

    var appointmentTime = new Date(time);
    var offsetType = typeof offset;
    var reminderPool = DateTools.generateBackwardsDateList(appointmentTime,offset);

    var job = new CronJob(reminderPool[0],
                            SmsTools.callableSendSMS(phoneNumber,composeMessage(eventName,time,reminderPool[0])),
                            null,true);

    return reminderPool[0];
}

module.exports.singleReminder = quickReminder;
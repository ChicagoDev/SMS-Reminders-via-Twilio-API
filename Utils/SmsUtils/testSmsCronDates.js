"use strict";

var CronJob = require('cron').CronJob;
var dateFactory = require('./../DateUtils/dateFactory');
var twilSms = require('./TwilSms');

var sendInThree = function(to,message) {
    var threeMinutes = 180000;
    var inThreeMinutes = new Date(Date.now()+threeMinutes);
    process.stdout.write("A text message should be sent at: \n" + inThreeMinutes.toString() + '\n');

    var cronSMS = new CronJob(inThreeMinutes, twilSms.callableSendSMS(to,
            'Did this message arrive at: ' + inThreeMinutes.toString() + '?'),
            null,true
    );

};

var sendSmsAtTwoTimes = function (to,message,futureTime,intervalList) {
    var fiveMinutes = 300000;
    var twoMinutes = 120000;
    var fourMinutes = 60000*4;
    var inFiveMinutes = new Date(Date.now()+fiveMinutes);
    process.stdout.write('testing for time:\n' + inFiveMinutes.toString() + '\n\n');


    var negativeOffset = [twoMinutes,fourMinutes];
    var datesToSendSMS = dateFactory.generateBackwardsDateList(inFiveMinutes,negativeOffset);

    datesToSendSMS.forEach(function(date){
        process.stdout.write("A text message should be sent at: \n" + date.toString() + '\n');
        var CronSMS = new CronJob(date,twilSms.callableSendSMS(to,
            'Did this message arrive at: ' + date.toString() + '?'
        ),null,true);
    });
};

/*
*
* My Date calculators are working.
* So lets start with a small example.
*
* Set something for five minutes in the future, and send a sms every minute.
*
* */


sendSmsAtTwoTimes('13127990181');
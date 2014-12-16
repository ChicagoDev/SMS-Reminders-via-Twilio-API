
////
////server.post('/reminders/solos/',oneMinuteReminder);
//////Remind someone in a minute. This is priming the pump of our SMS service
////function oneMinuteReminder(req,res,next) {
////    process.stdout.write(req.toString());
////    //var time = new Date(Date.parse(req.body.time));
////    var eventName = req.body.EventName
////    twilSms.sendSms('13127990181',"hello Rest! " + eventName)
////    res.send(201, {message: 'Thank you for creating a reminder for: ' + eventName});
////
////    /*
////     * Payload:
////     *   Event-Name
////     *
////     * */
////
////}
////
////
////server.post('reminders/quicks/', quickReminder)
////function quickReminder(req,res,next) {
////    //var time = new Date(req.body.time);
////    //var offsets = req.body.offsets; //should be a list
////    //var eventName = req.body.EventName;
////    //var originNumber = req.body.phoneNumber;
////
////    var quick_reminder = {
////        time: new Date(req.body.time),
////        offsets: req.body.offsets,
////        eventName: req.body.EventName,
////        originNumber: req.body.phoneNumber
////
////    }
////
////
////    var reminderTime = workflow.singleReminder(quick_reminder);
////    res.send(201, {message: 'created quick reminder at: ' + reminderTime.toString()})
////
////    //Need a function to first parse date.
////    //calculate 3 minutes before
////    //calculate the reminder
////    //send an http response
////    //Schedule the cron job
////}

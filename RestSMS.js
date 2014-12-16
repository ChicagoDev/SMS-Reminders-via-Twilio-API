var restify = require('restify');
var twilSms = require('./Utils/SmsUtils/TwilSms');

var server = restify.createServer({
    name: 'SmsReminderService',
    version: '0.0.1'
})

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/reminders/solos/',oneMinuteReminder);
//Remind someone in a minute. This is priming the pump of our SMS service
function oneMinuteReminder(req,res,next) {
    process.stdout.write(req.toString());
    //var time = new Date(Date.parse(req.body.time));
    var eventName = req.body.EventName
    twilSms.sendSms('13127990181',"hello Rest! " + eventName)
    res.send(201, {message: 'Thank you for creating a reminder for: ' + eventName});

    /*
     * Payload:
     *   Event-Name
     *
     * */

}


server.listen(8085);

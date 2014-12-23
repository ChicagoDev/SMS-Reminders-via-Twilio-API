var restify = require('restify');
var twilSms = require('./Utils/SmsUtils/TwilSms');
var workflow = require ('./Utils/ReminderWF');

var server = restify.createServer({
    name: 'SmsReminderService',
    version: '0.0.1'
})

//CORS
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());




/***
 * HTTP Request should be a json object which contains:
 * an "eventName" String
 * a "time" js-Date parsable String in the GMT-600(CDT) Timezone
 * a "phoneNumber" String with a in '1XXXXXXXXXX' format
 */

server.post('appointments/', bulkReminder);
function bulkReminder(req,res,next) {

    var appointmentParam = {
        appointmentTime: new Date(req.body.time),
        eventName: req.body.eventName,
        originNumber: req.body.phoneNumber
    };

    //Horrible variable name... not sure at this point what I want to return.
    var result = workflow.spawnReminders(appointmentParam);
    res.send(201, {
        message: 'Alright Alright Alright'
    })
    //??next();
}


var port = process.env.PORT || 8085;
server.listen(port, function() {
    console.log("Listening on " + port);
});

var config = require('../../config');
var accountSid = config.twilioID;
var authToken = config.twilioToken;
var fromNumber = config.outgoingNumber;

var client = require('twilio')(accountSid, authToken);

var smsFactoryFromDefault = function(to,message) {
    return {to: to, from: fromNumber, body: message}
}

//client.messages.create(smsFactoryFromDefault('13127990181','helloworld'));

var sendSMS = function(to,message) {
    client.messages.create(smsFactoryFromDefault(to,message));
}

var wrappedSms = function(to,message) {
    return function() {
        sendSMS(to,message)
    }
}

module.exports.sendSms = sendSMS;
module.exports.callableSendSMS = wrappedSms;
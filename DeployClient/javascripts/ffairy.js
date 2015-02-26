/**
 * Created by bjg on 12/20/14.
 */
function appointmentFactory() {
    var eventName,dateTime,phoneNumber;

    eventName = $('#event').val();
    phoneNumber = $('#phone').val();
    dateTime = getAppointmentDate();

    return {
        eventName: eventName,
        time: dateTime,
        phoneNumber: phoneNumber
    }
}

function jsonAppointment() {
    return JSON.stringify(appointmentFactory());
}

function parseTimeToMilli(time) {
    var timeStrings = time.split(':');
    var milliPerHour = 3600000;
    var milliPerMinute = 60000;
    var hours = parseInt(timeStrings[0]);
    var minutes = parseInt(timeStrings[1]);
    hours *= milliPerHour;
    minutes *= milliPerMinute;
    //total time
    return hours+minutes;

}

//YAY! Works!
function getAppointmentDate() {
    var apptDateAndTime = new Date($('#datepicker').datepicker('getDate').setMilliseconds(parseTimeToMilli($('#time').val())));
    return apptDateAndTime;
}

function postAppointment() {
    $.ajax({
        url: 'http://api.forgetfulfairy.com/appointments',
        type: 'POST',
        data: jsonAppointment(),
        contentType: 'application/json',
        crossDomain: true
        

    });

    
    alert("Thank You! Plenty of Reminders will be sent your way.");
    
    

}

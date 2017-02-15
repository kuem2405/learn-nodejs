// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// // Bind event and even handler as follows
// eventEmitter.on('eventName', eventHandler);

// // Fire an event
// eventEmitter.emit('eventName');

var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with th anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received successfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended');
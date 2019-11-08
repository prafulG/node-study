var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on('sneha-birthday', function() {
   console.log('sneha ka birthday.');
});

eventEmitter.emit('sneha-birthday');

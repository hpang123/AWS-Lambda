'use strict';
console.log('Loading function');
exports.handler = (event, context, callback) => {
	console.log('Some magical code to turn off my lightbulb goes here!', event.onoff);
	callback(null, "Light Bulb is switched off");
};
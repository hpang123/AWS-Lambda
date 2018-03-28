console.log('Loading function');

exports.handler = function(event, context) {
	var date = new Date().toDateString();
	console.log("Function Name: " + context.functionName);
	console.log("Request ID " + context.awsRequestId);
	console.log("Remaining Time: " + context.getRemainingTimeInMillis());
	console.log("Log Group Name: " + context.logGroupName);
	console.log("Log Stream Name: " + context.logStreamName);
	
	context.succeed("Hello " + event.username + "! Today's date is " + date);
};

exports.handler = (event, context, callback) => {
    // TODO implement
    console.log("An Object in S3 is added ");
    
    console.log("value = " + event.key1);
    console.log('remaining time =', context.getRemainingTimeInMillis());
    console.log('functionName =', context.functionName);
    console.log('AWSrequestID =', context.awsRequestId);
    console.log('logGroupName =', context.logGroupName);
    console.log('logStreamName =', context.logStreamName);

    callback(null, 'Hello from s3logLambda');
    
};
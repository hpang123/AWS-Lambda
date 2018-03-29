///The Calculator-
/*
Sample CODE
uses context variable
shows logging
shows exception Handling*/


/* Define test event:
  {
    "num1": 3,
    "num2": 0,
    "operand": "div"
  }
*/

// ************************************ 	CODE 	***********************************

exports.handler = (event, context, callback) => {
    // TODO implement
    console.log("Hello, Starting the Version 1 of "+ context.functionName +" Lambda Function");
    console.log("The event we pass will have two numbers and an operand value");
    // operand can be +, -, /, *, add, sub, mul, div
    
    console.log('Received event:', JSON.stringify(event, null, 2));
    var error, result;
    
    if (isNaN(event.num1) || isNaN(event.num2)) {
        console.error("Log - Invalid Numbers");			// different logging
        error = new Error("Error - Invalid Numbers!");		// Exception Handling
        callback(error);
    }

    switch(event.operand)
    {
        case "+":
        case "add":
            result = event.num1 + event.num2;
            break;
        case "-":
        case "sub":
            result = event.num1 - event.num2;
            break;
        case "*":
        case "mul":
            result = event.num1 * event.num2;
            break;
        case "/":
        case "div":
            if(event.num2 === 0){
            	console.error("Log - The divisor cannot be 0");
                error = new Error("Error - The divisor cannot be 0");
                callback(error, null);
            }
            else{
                result = event.num1/event.num2;
            }
            break;
        default:
            callback("Invalid Operand");
            break;
    }
    console.log("The Result is: " + result);
    
    callback(null, result);	// sent to the caller, since its a RequestResponse invocation, it will be printed in
    										// the Execution Logs below on the screen (Not CloudWatch logs)
};


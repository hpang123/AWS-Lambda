aws-master-lambda\src\practice1>aws iam create-role --role-name
basic-lambda-role --assume-role-policy-document file://policy.json

aws lambda create-function --region us-east-2 --function-name mySecondFunction --zip-file fileb://mySecondFunction.zip --role arn:aws:iam::xxxxxx:role/basic-lambda-role --handler index.handler --runtime nodejs6.10 --memory-size 128

aws lambda list-functions

aws lambda get-function --function-name mySecondFunction

aws lambda invoke --invocation-type RequestResponse --function-name mySecondFunction --region us-east-2 --log-type Tail --payload "{"""username""":"""YoYo"""}" output.txt
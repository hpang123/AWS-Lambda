aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/"

aws logs describe-log-streams --log-group-name "/aws/lambda/contextObject"

aws logs get-log-events --log-group-name "/aws/lambda/contextObject" --log-stream-name "2018/03/23/[$LATEST]708969bf3b3e418681798110fcb8e597"


aws lambda get-function --function-name mySecondFunction

aws lambda list-versions-by-function --function-name calculator

aws lambda list-aliases --function-name calculator
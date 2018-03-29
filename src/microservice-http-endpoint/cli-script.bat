aws cloudformation package --template-file template.yaml --output-template-file output.yaml --s3-bucket hpang-sam-codebase

aws cloudformation deploy --template-file output.yaml --stack-name MyFirstSAMDeployment --capabilities CAPABILITY_IAM
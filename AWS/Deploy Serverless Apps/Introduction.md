# Serverless Introduction

## Serverless Components

1.  Function As a Service -> Allows you to write arbitrary code in a serverless fashion. Doing this we split our code into multiple functions and deploy them.

    1.  EX: AWS Lambda, Google Cloud, Azure Functions

2.  Datastores -> Stores blocks of data, EX: S3, Amazon DynamoDB

3.  Messaging => A messanger service

4.  Services => Any service that provides functionality that doesn't require servers.

## Serverless or not?

You can mix and match based on your needs. The more serverless components you use the better the technology becomes to your benefit.

## Function as a server

1.  Compute in the world of serverless => Split application into small functions
2.  It's event driven , functions are executed in reaction to events.
3.  You only pay per invocationw
4.  The rest is handled by a cloud provider => Provisioning servers, autoscaling, managing servers, installing updates, etc.

## Use Cases for FaaS

Mobile/web backends
Real-time streaming
Files processing
Services "glue" => Receive events from service | interact with other services accordingly IE: send slack notification if a host is terminated

## What languages/platforms can we use?

1.  Depends on a cloud provider
2.  AWS Lambda runtimes => Node.js, Python, Ruby, Java, Go, .Net, bring your own environment

## Example of a FaaS Function

```
// Define an anonymous function that has to be explorted
exports.handler = (event) => {
  const number = event.number
  const updatedNum = number++
  return {
    result: updatedNum
  }

}
```

1.  When we want to deploy we have to take into consideration 2 limitations:
    1.  Memory
    2.  Timeout => Max time that is available for the function to finish. If it runs out of time it will be autoterminated.

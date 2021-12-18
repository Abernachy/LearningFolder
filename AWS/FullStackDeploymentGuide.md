# AWS Elastic Beanstalk Full stack deployment guide

This guide will help me out with future projects when I want to deploy them to AWS. Turns out putting shit on the cloud isn't quite so easy. A lot the context in this guide comes from the Udacity course and their exercises / projects.

## Purpose of the Elastic Beanstalk

The Elastic Beanstalk is essentially an automated deployment engine that will deploy more EC2 (linux servers) to handle additional loads as your traffic increases. As it decreases, it'll drop the additional servers. This does incurr additional cost.

## Guide start

1. Install the Elastic Beanstalk CLI app from AWS. This will allow you to initialize and create your elastic beanstalk deployments.

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-init.html

2. In the repo you want to push up, make sure you have your changes staged and comitted

3. In your package.json, make sure you have your build commands set up. The ones below are pulled from the Udacity typescript exercises

```
		"start": "node .",
		"tsc": "tsc",
		"dev": "ts-node-dev ./src/server.ts",
		"prod": "tsc && node ./www/server.js",
		"clean": "rimraf www/ || true",
		"build": "npm run clean && tsc && cp -rf src/config www/config && cp .npmrc www/.npmrc && cp package.json www/package.json && cd www && zip -r Archive.zip . && cd ..",
		"test": "echo \"Error: no test specified\" && exit 1"
```

4.  Run "npm run build" and it'll build a www folder in your project directory

5.  Then in the terminal in the project directory, run eb init and it'll create a .elasticbeanstalk folder in your project directory. Inside that is a configuration yaml, open it and add

```
deploy:
  artifact: ./www/Archive.zip
```

just after the default environment section.

6.  Run "eb deploy" and it'll deploy your app to the AWS elastic beanstalk where it'll create a server. Assuming everything is working, you'll be able to access it via the URL just above the application name.

7.  If you need to add in things like environment variables, poke into the configuration section. It's also in there you can adjust how many EC2 instances get created.

8.  If you make any changes to your code, just stage them, rebuild, and use "eb deploy" and it'll deploy your changes to your application.

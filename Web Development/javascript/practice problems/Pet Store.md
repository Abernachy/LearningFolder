Pet Store

Create a Node js application that serves the following purpose.

You will need to `npm init` your application, and install node-fetch as well as leverage fs in order to create this application.  

User Stories:

As a user I’d like to see a text file that lists the available pets from the petstore api so that I can see which animals are available for adoption.


As a user I’d like to see another file that lists the animals with a pending status (similar to the previous file), so that I can see other animals that I can’t adopt yet.


Additional Instructions:

You will need to use the async methods of fs to write the file (nothing with SYNC!!).

Your instructor should be able to clone down your repository and run `node index.js` (where index.js is the entry point to the application) that will generate the appropriate file.

Use this link to explore the API
https://petstore.swagger.io/#/

The URL you should be using as the endpoint will look something like this:
https://petstore.swagger.io/v2/pet/5


Don’t forget to include a ReadMe!





Stretch Activities:


Create a function that reads from a text file (with a path given in the command line) that  “POST”s (creates) a pet to the Pet list.  When you generate the text files, verify that the pet you added is on the available Pet list.
Example Command:  node index.js my/path/to/a/pet.json

If I provide a text path it creates the pet.
You have already done this: If I do not provide a text path - then the application should regenerate the text files.


Create a function that reads from a text file (with a path given in the command line) that “PUT”s (updates) the pet from stretch-activity 1 that changes the status from “available” to “pending”.  When you generate the text files, verify that the updated animal now appears in the pending list, and not in the available list.  
Example Command: node index.js my/path/to/a/pet.json true

If I provide a boolean value after the path it should update an existing

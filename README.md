# A simple NODEJS REST & HTTP interaction with Clickatell platform API

Inside the test.js file is an example implementation of the REST and HTTP API.

Simply require the file index.js file and use one of the methods to send. 
Add the message you want to send, and add the cell number you're sending to, and the API key.

```
clickatell.rest("Hello testing message", ["27XXXXX-NUMBER","27XXXXX-NUMBER"], "APIKEY-HERE");

// Or use http method below
clickatell.http("Hello testing message", ["27XXXXX-NUMBER","27XXXXX-NUMBER"], "APIKEY-HERE");
```

### Run the code

Simply trigger the sending by running "node test.js" in your terminal.

```
node test.js
```

### Handeling API callbacks

In the callback.js file you will find a code example that simply creates a NodeJS server and then listens on port 80.

It has a express post method pointing to yourdomain.com/sms which you will use on your platform api to send the callback
posts to be able to read callback infromation.

Below is data that you will get back on the callback.

DELIVERED_TO_GATEWAY : 
* integrationName
* messageId
* requestId
* clientMessageId
* to
* from
* statusCode
* status
* statusDescription
* timestamp

RECEIVED_BY_RECIPIENT :
* integrationName
* messageId
* requestId
* clientMessageId
* to
* from
* statusCode
* status
* statusDescription
* timestamp


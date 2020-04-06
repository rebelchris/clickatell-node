const Request = require('request');

// Constructor
function Rest(content, to, apiKey) {
  // always initialize all instance properties
  this.content = content; // message you are sending
  this.to = to; // phone number
  this.apiKey = apiKey;

}
// class methods
Rest.prototype.sendMessage = function (content, to, apiKey) {
  return new Promise((resolve, reject) => {

    // set options array
    content = JSON.stringify(content);
    to = JSON.stringify(to);
    var options = {
      method: 'POST',
      url: 'https://platform.clickatell.com/messages',
      headers:
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': apiKey
      },
      body: '{"content": ' + content + ', "to": ' + to + '}'
    }

    // send the request
    Request(options, function (error, response, body) {
      if (error !== null) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};
// export the class
module.exports = Rest;
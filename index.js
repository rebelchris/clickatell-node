var Http = require("./api/http");
var Rest = require('./api/rest');

module.exports = {
    sendMessageHttp: function (content, to, apiKey) {
        var http = new Http();
        var sendMessageHttp = http.sendMessage(content, to, apiKey);
        return sendMessageHttp;
    },
    sendMessageRest: function (content, to, apiKey) {
        return new Promise((resolve, reject) => {
            var rest = new Rest();
            rest.sendMessage(content, to, apiKey)
                .then(function (result) {
                    resolve(result);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
    // more methods coming
}
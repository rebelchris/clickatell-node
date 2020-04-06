var clickatell = require("./index.js");

//clickatell.sendMessageRest("Hello testing message", ["27XXXXX-NUMBER",27XXXXX-NUMBER], "APIKEY-HERE");
clickatell.sendMessageRest("Hello testing message", ['27769895362'], "xQlDC6LUQ3iGF--yx6TD6A==")
    .then(function (res) {
        console.log('all done');
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

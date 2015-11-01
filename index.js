"use strict";

var server = require(__dirname + "/lib/server");
var router = require(__dirname + "/lib/router");
var requestHandlers = require(__dirname + "/lib/requestHandlers");

var handle = {};
handle[""] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);

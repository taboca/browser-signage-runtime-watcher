
'use strict'; 

var app = require('electron').app;
var browser = require('electron').BrowserWindow;
var client = require('electron-connect').client;

app.on('ready', function () {
    var mainWindow = new browser({
        width: 400,
        height: 300
    });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    // Connect to server process 
    client.create(mainWindow); 
});

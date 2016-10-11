'use strict';
 
var app = require('app');
var BrowserWindow = require('browser-window');
var client = require('electron-connect').client;
 
app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 400,
    height: 300
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
 
  // Connect to server process 
  client.create(mainWindow);
});

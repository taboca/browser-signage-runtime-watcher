//////
//
//
const {app, BrowserWindow} = require('electron');

var client = require('electron-connect').client;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
 
  client.create(mainWindow);

});

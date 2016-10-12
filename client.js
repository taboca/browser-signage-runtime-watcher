//////
//
//
const {app, BrowserWindow} = require('electron');

var client = require('electron-connect').client;

/// 
// This prevents possible early popups or other unknown popups
// https://github.com/Quramy/electron-connect/issues/62
// https://github.com/electron/electron/issues/7530
process.on('uncaughtException', (err) => {
  console.log('Exception:' + err);
})

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
      height: 600,
      width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

   
  client.create(mainWindow);

});

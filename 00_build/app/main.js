const {app, BrowserWindow} = require('electron');

var config = require('./config_browser.js')

///
// This prevents possible early popups or other unknown popups
// https://github.com/Quramy/electron-connect/issues/62
// https://github.com/electron/electron/issues/7530

process.on('uncaughtException', (err, data) => {
  console.log('Exception:' + err + ':' + data);
})

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
      height: config.height,
      width: config.width,
      frame: config.frame
  });

  //mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.loadURL(config.page);

});


const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 768,
      width: 1360 
  });

  mainWindow.loadURL('http://localhost:8888/static/10_wrappers/wide.html');
});

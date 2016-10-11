'use strict';
 
var gulp = require('gulp');

var options = {
 	//useGlobalElectron: false, 
        //stopOnClose: true,
}

var electron = require('electron-connect').server.create(options);
 
gulp.task('serve', function () {

  // Start browser process 
  electron.start();

  // Restart browser process 
  gulp.watch('client.js', electron.restart);

  // Reload renderer process 
  gulp.watch(['index.js', 'index.html'], electron.reload);
});



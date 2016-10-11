'use strict';
 
var gulp = require('gulp');

var options = {
 	//useGlobalElectron: false, 
        stopOnClose: true,
}

var electron = require('electron-connect').server.create(options);
 

// bug 001 fixed
var callback = function(electronProcState) {
  console.log('electron process state: ' + electronProcState);
  if (electronProcState == 'stopped') {
    process.exit();
  }
};

gulp.task('serve', function () {

  electron.start(callback);

  gulp.watch('client.js', electron.restart);

  gulp.watch(['index.js', 'index.html'], electron.reload);

});



'use strict';
 
var gulp = require('gulp');

var options = {
 	//useGlobalElectron: false, 
        stopOnClose: true,
}

var electron = require('electron-connect').server.create(options);
 
gulp.task('serve', function () {

  electron.start();

  gulp.watch('client.js', electron.restart);

  gulp.watch(['index.js', 'index.html'], electron.reload);

});



'use strict';
 
var gulp = require('gulp');

var options = {
 	//useGlobalElectron: false, 
        stopOnClose: true,
}

var electron = require('electron-connect').server.create(options);
 

// bug 001 fixed
// ref https://github.com/Quramy/electron-connect/blob/master/example/stop-on-close/gulpfile.js
var callback = function(electronProcState) {
  console.log('electron process state: ' + electronProcState);
  if (electronProcState == 'stopped') {
    process.exit();
  }
};

gulp.task('serve', function () {

  // Start browser process
  electron.start(callback);

  // Restart browser process
  gulp.watch('client.js', ['restart:browser']);

  gulp.watch('*.html', ['reload:renderer']);

});

gulp.task('restart:browser', function(done) {
  electron.restart(callback);
  done();
});

gulp.task('reload:renderer', function (done) {
  // Reload renderer process
  electron.reload(callback);
  setTimeout(function () {
    electron.broadcast('myNotification');
    done();
  });
});

gulp.task('default', ['serve']);



'use strict';

var gulp = require('gulp');

var fs = require('fs');

var options = {
 	//useGlobalElectron: false,
        stopOnClose : true,
        logLevel    : 2,
}

var electron = require('electron-connect').server.create(options);

// bug 001 fixed
// ref https://github.com/Quramy/electron-connect/blob/master/example/stop-on-close/gulpfile.js
var callback = function(electronProcState) {
  console.log('electron process state: ' + electronProcState);
  if (electronProcState == 'stopped') {
    //process.exit();
  }
};

var app=false;

gulp.task('serve', function () {

  // Start browser process
  electron.start("--enable-logging --remote-debugging-port=8315", callback);

  app=true;

  // Restart browser process
  gulp.watch('client.js', ['restart:browser']);

  gulp.watch('*.html', ['reload:renderer']);

  gulp.watch('start.json', ['infra:command']);

});

gulp.task('infra:command', function(done) {
  fs.readFile("./start.json", {encoding: 'utf-8'}, function (err, data) {
    var config = JSON.parse(data);
    console.log('State ='+config['run']);
    if(config['run']=='off') {
      if(app==true) {
        electron.stop();
        app=false;
        done();
      }
    }
    if(config['run']=='on') {
      if(app==false) {
          //electron.start();
          //electron.start("--enable-logging", callback);
          electron.start("--enable-logging");
          app=true;
          done();
      }
    }

  });
  done();
});

gulp.task('restart:browser', function(done) {
  electron.restart(callback);
  done();
});

gulp.task('reload:renderer', function (done) {
  electron.reload(callback);
  setTimeout(function () {
    electron.broadcast('myNotification');
    done();
  });
});

gulp.task('default', ['serve']);

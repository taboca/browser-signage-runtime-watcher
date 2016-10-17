# Updated

* build will create binary and install
* cron will set to the cron 

# electron-monitor legacy documentation

This is an experimental project aimed to control the basic infrastructure of a kiosk-based aplpication using Electron. The goals are: 

* To start electron
* To watch and relaunch electron based in certain conditions
* Conditions being: memory limitation
* Conditions being: programatic event

## Using

* node ./node_modules/bin/gulp.js

## Notes

### stopOnClose note

Bug 001 / With the stopOnClose: true, there is a bug when a watch file is changed, it brings the following JS error, which makes sense, because it properly kills the electron process.  
```
Uncaught Exception:
Error: connect ECONNREFUSED 127.0.0.1:30080
    at Object.exports._errnoException (util.js:1026:11)
    at exports._exceptionWithHostPort (util.js:1049:20)
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1081:14)

    Uncaught Exception:
Error: socket hang up
    at createHangUpError (_http_client.js:252:15)
    at Socket.socketCloseListener (_http_client.js:284:23)
    at emitOne (events.js:101:20)
    at Socket.emit (events.js:188:7)
    at TCP._handle.close [as _onclose] (net.js:493:12)
```

## Fixed 

Test the JS trouble related to bug when the JS exception before the browser
if we can try to simulate bug here

https://github.com/electron/electron/issues/7530

https://shapeshed.com/uncaught-exceptions-in-node/

process.on('uncaughtException', (err) => {
  console.log('Exception:' + err);
})

## Todo 

Tree Kill

node stuff for killing

# Other

* http://schickling.me/synchronous-tasks-gulp/

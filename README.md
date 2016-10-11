# electron-monitor

This is an experimental project aimed to control the basic infrastructure of a kiosk-based aplpication using Electron. The goals are: 

* To start electron
* To watch and relaunch electron based in certain conditions
* Conditions being: memory limitation
* Conditions being: programatic event

## Using

* gulp serve 

## Notes

### stopOnClose note

With the stopOnClose: true, there is a bug when a watch file is changed, it brings the following JS error, which makes sense, because it properly kills the electron process.  

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

		

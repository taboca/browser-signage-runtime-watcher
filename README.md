# Electron-based browser packager and cron monitor

This project is responsible for packaging a browser-based application and setup scripts so it is being called using the cron. The cron process will monitor activity (memory check) and will dispatch the restart loop which is comprised of killing all the associated processes and launching the application again.

## Install the browser and watcher script

* 00_build scripts — to install the electron requisites, and build a browser application. You can change the contents of the browser app, modifying the scripts within ./00_build/app;

* 10_cron scripts — use the shell script in 10_cron to install the script that monitors the process. Make sure to follow the crontab -e command to enable the script in the cron.

# Experimental extra project (20_connect)

## Build a browser architecture

The build-a-browser, above architecture, is being used to create a legacy environment, compatible with what the Tela Social project used to do, however using Electron. For another view, on using Node to manage the Electron browser in runtime, please check the experimental project in 20_connect.

Make sure you check your start.json file.

```
cd 20_connect
npm install
node ./node_modules/bin/gulp.js
```

## License and trademark

* This work is licensed in CC-by 4.0 Creative Commons, by Marcio S Galli;
* Source at ./20_connect project is MIT licensed, by Marcio S Galli;
* 10_cron scripts are licensed in # Version: MPL 1.1/GPL 2.0/LGPL 2.1, see each file license;
* Names, such as Tela Social, and others, are trademarks of their respective owners.

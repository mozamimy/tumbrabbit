'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: { webSecurity: false }});
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('will-navigate', function(preventDefault, url) {
    var matched;
    if (matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)) {
      console.dir(matched);
    }
    // preventDefault();
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

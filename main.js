"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain
const dialog = electron.dialog

let mainWindow = null;

app.on("ready", function() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
});

app.on("window-all-closed", function() {
  app.quit();
});

ipc.on('open-file-dialog', function (event) {
  dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory']
  }, function (files) {
    if (files) event.sender.send('selected-directory', files)
  })
})

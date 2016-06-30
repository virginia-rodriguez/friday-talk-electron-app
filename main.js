"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on("ready", function() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
});

app.on("window-all-closed", function() {
  app.quit();
});

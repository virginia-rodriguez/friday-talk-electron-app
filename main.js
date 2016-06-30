"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow = null;
let menuTemplate = [
  {
    label: 'Friday Talk',
    submenu: [
      { label: 'Preferences' },
      { label: 'Quit', accelerator: 'Command+Q', click: app.quit }
    ]
  }];

app.on("ready", function() {
  var menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL("file://" + __dirname + "/index.html");
});

app.on("window-all-closed", function() {
  app.quit();
});

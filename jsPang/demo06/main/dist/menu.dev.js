"use strict";

var _require = require('electron'),
    Menu = _require.Menu,
    BrowserWindow = _require.BrowserWindow;

var template = [{
  label: '1',
  submenu: [{
    label: '1-1',
    accelerator: 'ctrl + n',
    click: function click() {
      var win = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true
        }
      });
      win.loadFile('yellow.html');
      win.on('closed', function () {
        win = null;
      });
    }
  }, {
    label: '1-2'
  }]
}, {
  label: '2',
  submenu: [{
    label: '2-1'
  }, {
    label: '2-2'
  }]
}];
var m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);
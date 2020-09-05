"use strict";

var _require = require('electron'),
    Menu = _require.Menu;

var template = [{
  label: '1',
  submenu: [{
    label: '1-1'
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
"use strict";

var btn = (void 0).document.querySelector('#btn');

var BrowserWindow = require('electron').remote.BrowserWindow;

window.onload = function () {
  btn.onclick = function () {
    newWin = new BrowserWindow({
      width: 500,
      height: 500
    });
    newWin.loadFile('yellow.html');
    newWin.on('close', function () {
      newWin = null;
    });
  };
};

var _require = require('electron'),
    remote = _require.remote;

var rightTemplate = [{
  label: '粘贴',
  accelerator: 'ctrl + v'
}, {
  label: '复制',
  accelerator: 'ctrl + c'
}];
var m = remote.Menu.buildFromTemplate(rightTemplate);
window.addEventListener('contextmenu', function (e) {
  /* 阻止默认 */
  e.preventDefault();
  m.popup({
    window: remote.getCurrentWindow()
  });
});
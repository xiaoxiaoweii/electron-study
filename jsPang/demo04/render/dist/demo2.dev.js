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
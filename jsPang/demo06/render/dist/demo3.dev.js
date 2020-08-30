"use strict";

var _require = require('electron'),
    shell = _require.shell;

var aHref = document.querySelector('#aHref');

aHref.onclick = function (e) {
  /* 阻止默认行为 */
  e.preventDefault();
  var href = this.getAttribute('href');
  shell.openExternal(href);
};
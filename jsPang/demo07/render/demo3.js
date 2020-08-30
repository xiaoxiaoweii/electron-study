var { shell } = require('electron')

var aHref = document.querySelector('#aHref')

aHref.onclick = function(e) {
  /* 阻止默认行为 */
  e.preventDefault()
  var href = this.getAttribute('href')

  shell.openExternal(href)
}

var mybtn = document.querySelector('#mybtn')
mybtn.onclick = function(e) {
  window.open('https://baidu.com')
}
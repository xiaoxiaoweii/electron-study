var fs = require('fs');
window.onload = function () {
	var btn = this.document.querySelector('#btn');
	var user = this.document.querySelector('#user');
	btn.onclick = function () {
		fs.readFile('xiaoxiao.txt', (err, data) => {
			user.innerHTML = data;
		});
	};
};

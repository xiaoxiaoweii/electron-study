const { Menu, BrowserWindow } = require('electron');

var template = [
	{
		label: '1',
		submenu: [
			{
				label: '1-1',
				accelerator: 'ctrl + n',
				click: () => {
					var win = new BrowserWindow({
						width: 500,
						height: 500,
						webPreferences: {
							nodeIntegration: true,
							enableRemoteModule: true,
						},
					});
					win.loadFile('yellow.html');
					win.on('closed', () => {
						win = null;
					});
				},
			},
			{
				label: '1-2',
			},
		],
	},
	{
		label: '2',
		submenu: [
			{
				label: '2-1',
			},
			{
				label: '2-2',
			},
		],
	},
];

var m = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);

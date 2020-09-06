var electron = require('electron');
var app = electron.app; // 引用app
var BrowserWindow = electron.BrowserWindow; // 窗口引用

var mainWindow = null; // 声明要打开的主窗口

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 800,
        webPreferences: {
            /* 启用node下边的所有功能 */
            nodeIntegration: true,
            /* 保证renderer.js可以可以正常require('electron').remote， */
            enableRemoteModule: true,
        },
    });
    mainWindow.webContents.openDevTools()
    require('./main/menu.js')
    mainWindow.loadFile('demo4.html'); // 加载html页面
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
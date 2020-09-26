const { app, BrowserWindow, ipcMain } = require('electron');
const mysql = require('mysql');
const net = require('net');


function createWindow(){
	const win = new BrowserWindow({
		width: 800,
		height: 800,
		webPreferences: {
			nodeIntegration: true
		}
	})

	win.loadFile('./app/index.html')
}

app.whenReady().then(createWindow);


let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'bitcoind'
})


ipcMain.on('wallet:create', (e, options) => {
	console.log(options);
});
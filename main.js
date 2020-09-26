const { app, BrowserWindow, ipcMain } = require('electron');
const mysql = require('mysql');
const net = require('net');

let win;

function createWindow(){
	win = new BrowserWindow({
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
	database: 'bitcoindb'
})


connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
});

ipcMain.on('wallet:create', (e, options) => {
	console.log(options);

	let sql = 'INSERT INTO wallet(wallet_name) VALUES("' + options.wallet + '")';
	console.log(sql);
	connection.query(sql);
	connection.end();

	win.webContents.send('wallet:done');
});


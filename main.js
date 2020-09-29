const { app, BrowserWindow, ipcMain } = require('electron');
const mysql = require('mysql');
const net = require('net');

let win;
let grab_wallet_information;

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'bitcoindb'
});


connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
});


function createWindow(){
	win = new BrowserWindow({
		width: 800,
		height: 800,
		backgroundColor: "white",
		webPreferences: {
			nodeIntegration: true
		},
	})

	win.loadFile('./app/index.html')
}

app.on('ready', () => {
	createWindow()
});


app.on('ready-to-show', () => {
	createWindow()

	let wallet_query = "SELECT * FROM wallet";

	let list_of_wallets = connection.query(wallet_query, (error, results, fields) => {
	  if (error) {
	    return console.error(error.message);
	  }
	  
	  win.webContents.on("ready", () => {
		win.webContents.send("wallet:list", results);
	  });
	});


});

ipcMain.on('wallet:create', (e, options) => {
	
	let sql = 'INSERT INTO wallet(wallet_name) VALUES("' + options.wallet + '")';
	
	connection.query(sql);
	connection.end();

	win.webContents.send('wallet:done');
});




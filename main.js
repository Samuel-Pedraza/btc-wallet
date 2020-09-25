const { app, BrowserWindow } = require('electron');
const mysql = require('mysql');

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


// functionality needed

// 1: generate an address
// 2: save private key
// 3: save public key
// 4: check address to see if it has a balance
// 5: display balance
// 6: send transaction
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow(){
	//create Browser Window
	win = new BrowserWindow({
		height: 800,
		width: 600,
		webPreferences: {
    nodeIntegration: true
  }
	}


		);

	//load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));
	//open dev tools
	win.webContents.openDevTools();

	win.on('closed', () => {
		win=null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
	if(process.platform!=='darwin'){
		app.quit();
	}
})
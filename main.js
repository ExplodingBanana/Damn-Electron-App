const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;


function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 750,
    //fullscreen:true,
    frame:false,
    resizable:true
    }); //основная конфигуация


  mainWindow.loadURL('file://' + __dirname + '/views_html/startscreen/index.html'); //загрузка html файла


  mainWindow.on('closed', function() {
    mainWindow = null;
  });
} //закрытие главного окна

app.on('ready', createWindow); //создание окна при готовности приложения

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});  //закрытие окна и сворачивание в док если это OS X

app.on('activate', function () {
.
  if (mainWindow === null) {
    createWindow();

  }
}); //восстановление окна

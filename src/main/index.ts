// const createWindow from './helpers/create-window.js';
import {app, BrowserWindow} from 'electron';
import createContextMenu from './createContextMenu';
import createWindow from './createWindow';

try {
  require('electron-reloader')(module);
} catch {}

createContextMenu();

app.once('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

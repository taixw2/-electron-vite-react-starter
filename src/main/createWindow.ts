import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as windowStateKeeper from 'electron-window-state';

export default function createWindow() {
  const winOptions = {
    minWidth: 800,
    minHeight: 600,
    frame: false,
    titleBarStyle: 'hidden' as 'hidden',
    autoHideMenuBar: true,
    trafficLightPosition: {
      x: 20,
      y: 15,
    },
    webPreferences: {
      contextIsolation: true,
      devTools: !app.isPackaged,
      spellcheck: false,
      nodeIntegration: true,
    },
  };

  let windowState = windowStateKeeper({
    defaultWidth: winOptions.minWidth,
    defaultHeight: winOptions.minHeight,
  });

  const mainWindow = new BrowserWindow({
    ...winOptions,
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
  });

  async function loadDevURL() {
    while (true) {
      try {
        await mainWindow.loadURL(`http://localhost:${8081}`);
        break;
      } catch (error) {}
    }
  }

  if (app.isPackaged) {
    mainWindow.loadFile(path.join(__dirname, '../../dist/index.html'));
  } else {
    loadDevURL();
  }

  windowState.manage(mainWindow);
}

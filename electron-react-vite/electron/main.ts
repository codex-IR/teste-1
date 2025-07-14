import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron'
import { join } from 'path'

const MIN_WIDTH = 1024
const MIN_HEIGHT = 768
export const HEIGHT_TITLE_BAR = 30

app.commandLine.appendArgument('--disable-ipc-flooding-protection')
app.disableHardwareAcceleration()

let win: BrowserWindow | null = null

function setDarkTheme() {
  nativeTheme.themeSource = 'dark'
  win?.setTitleBarOverlay({
    height: HEIGHT_TITLE_BAR,
    symbolColor: '#ffffff',
    color: '#121212'
  })
}

function setLightTheme() {
  nativeTheme.themeSource = 'light'
  win?.setTitleBarOverlay({
    height: HEIGHT_TITLE_BAR,
    symbolColor: '#000000',
    color: '#ffffff'
  })
}

function createWindow() {
  win = new BrowserWindow({
    width: MIN_WIDTH,
    height: MIN_HEIGHT,
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT,
    titleBarOverlay: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  })

  if (nativeTheme.shouldUseDarkColors) {
    setDarkTheme()
  } else {
    setLightTheme()
  }

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(join(__dirname, '../dist-renderer/index.html'))
  }
}

ipcMain.handle('theme:set', (_event, theme) => {
  nativeTheme.themeSource = theme
  if (nativeTheme.shouldUseDarkColors) {
    setDarkTheme()
  } else {
    setLightTheme()
  }
  return nativeTheme.themeSource
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
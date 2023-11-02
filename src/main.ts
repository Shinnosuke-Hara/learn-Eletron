import { app, BrowserWindow, ipcMain, Menu } from "electron";
import { menu } from "./menu";
import path from "node:path";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // デフォルトのメニューバーを隠す (Windows, Linux のみで有効)
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  // ポップアップメニューを作成
  const menu = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "Close",
          accelerator: "CmdOrCtrl+W",
          role: "close",
        },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Console Log",
          click: () => console.log("context-menu"),
        },
      ],
    },
  ]);

  // 'show-context-menu' チャンネルに受信があればポップアップメニューを表示
  ipcMain.handle("show-context-menu", () => menu.popup());
  mainWindow.loadFile("dist/index.html");
};

app.whenReady().then(() => {
  createWindow();
  // アプリケーションメニューへ "menu" を適用する
  Menu.setApplicationMenu(menu);
});

ipcMain.on("show-context-menu", (event) => {
  console.log("show-context-menu");
});

app.once("window-all-closed", () => app.quit());

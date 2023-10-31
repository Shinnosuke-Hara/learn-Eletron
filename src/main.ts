import { app, BrowserWindow, Menu } from "electron";
import { menu } from "./menu";

app.whenReady().then(() => {
  new BrowserWindow().loadFile("dist/index.html");
  // アプリケーションメニューへ "menu" を適用する
  Menu.setApplicationMenu(menu);
});

app.once("window-all-closed", () => app.quit());

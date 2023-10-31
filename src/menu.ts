import { Menu, MenuItemConstructorOptions } from "electron";

// メニューのテンプレート配列を作成
const template: MenuItemConstructorOptions[] = [
  { role: "fileMenu", label: "トイレ" },
  { role: "editMenu", label: "トイレ" },
  { role: "viewMenu", label: "トイレ" },
  { role: "windowMenu", label: "トイレ" },
  { role: "help", submenu: [{ role: "about" }], label: "トイレ" },
];

// macOS では "アプリメニュー" が必要
if (process.platform === "darwin") template.unshift({ role: "appMenu" });

// テンプレートからメニューを作成
export const menu = Menu.buildFromTemplate(template);

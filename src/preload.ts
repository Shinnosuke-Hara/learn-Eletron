import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("myAPI", {
  // メインプロセスの 'show-context-menu' チャンネルへメッセージ（ここでは空）を送信
  showContextMenu: () => ipcRenderer.invoke("show-context-menu"),
});

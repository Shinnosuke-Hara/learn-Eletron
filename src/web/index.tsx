import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

document.addEventListener("DOMContentLoaded", () => {
  // コンテキストメニューのリスナーを追加
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    window.myAPI.showContextMenu();
  });

  // Reactアプリケーションのレンダリング
  createRoot(document.getElementById("root") as Element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

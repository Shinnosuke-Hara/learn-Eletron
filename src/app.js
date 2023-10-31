window.addEventListener("contextmenu", (e) => {
  // ブラウザのデフォルトの挙動をキャンセル（必須）
  e.preventDefault();
  // プリロードスクリプトに登録されたメソッドを呼び出し
  window.myAPI.showContextMenu();
});

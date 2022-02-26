import "./styles.css";

const onClickAdd = () => {
  // 値取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成、クラス名追加
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成、入力値を設定する
  const li = document.createElement("li");
  li.innerText = inputText;

  // divの子要素にliを追加
  div.appendChild(li);

  // listの子要素にdivを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

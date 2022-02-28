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

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了")
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除")
  });


  // divの子要素にbuttonを追加
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

import "./styles.css";

const onClickAdd = () => {
  // 値取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リスト追加
  createIncompleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストを生成して追加する関数
const createIncompleteList = (text) => {
  // div生成、クラス名追加
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成、入力値を設定する
  const li = document.createElement("li");
  li.innerText = text;

  // divの子要素にliを追加
  div.appendChild(li);

  // listの子要素にdivを追加
  document.getElementById("incomplete-list").appendChild(div);

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを取得して未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素を生成
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // 初期化
    addTarget.textContent = null;

    // li 生成
    const li = document.createElement("li");
    li.innerText = text;

    // button 生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 未完了リストへ追加
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // li button 追加
    addTarget.append(li);
    addTarget.append(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを取得して未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divの子要素にbuttonを追加
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  /**
   * 新規追加パート
   */

  //値が変わるものはStateで管理する。
  const [todoText, setTodoText] = useState("");

  //テキストを更新した際、useStateで指定した初期値が優先され入力できない。
  //更新があったことを能動的に教える必要がある。
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //「追加」をクリックしたときの挙動

  const onClickAdd = () => {
    if (todoText === "") return;
    //Stateの一覧を取得し、新しく追加するテキストを追記する
    const newTodos = [...incompleteTodos, todoText];
    //Stateに適用して再描画させる。
    setIncompleteTodos(newTodos);
    //テキスト入力欄を空にする。
    setTodoText("");
  };

  /**
   * 未完了パート
   */

  const [incompleteTodos, setIncompleteTodos] = useState([
    "リンゴを買う",
    "みかんを買う"
  ]);

  /**
   * 完了パート
   */

  const [completeTodos, setCompleteTodos] = useState([
    "バナナを買う",
    "マンゴーを買う"
  ]);

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

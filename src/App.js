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

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  //削除ボタンを謳歌したら自身をuseStatから削除
  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    //第一引数の要素から、第二要素分を削除
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  //完了ボタンを押下したら自身をincompleteTodosのuseStateから削除して
  //completeTodosのuseStateに追加
  const onClickComplete = (index) => {
    //未完了から削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    //完了に追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    //再描画
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  /**
   * 完了パート
   */

  const [completeTodos, setCompleteTodos] = useState([]);

  const onClickBack = (index) => {
    //完了から削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    //未完了に追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    //再描画
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  /**
   * HTMLパート
   */
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
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/*アロー関数にしないとonClickDeleteが複数回実行されてまう*/}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

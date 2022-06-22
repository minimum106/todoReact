import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button></button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>みかんを買う</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>リンゴを買う</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}

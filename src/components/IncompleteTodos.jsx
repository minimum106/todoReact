import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
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
  );
};

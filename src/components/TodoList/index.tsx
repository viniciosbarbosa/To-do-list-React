import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import EmptyIcon from "../../assets/clipboard.svg?react";

import style from "./index.module.css";
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const { state: todos } = useContext(TodoContext);

  return (
    <div className={style.container}>
      {todos.length > 0 && (
        <div className={style.infoTasksContainer}>
          <span className={style.infoDoneTasks}>Finished</span>

          <div className={style.infoCountDoneTasks}>
            {todos.filter((item) => item.isDone).length} de {todos.length}
          </div>
        </div>
      )}

      {todos.length < 1 && (
        <div className={style.emptyContainer}>
          <img src={EmptyIcon} alt="empty" />
          <p className={style.emptyLabel}>
            <strong>You have no task registered</strong>
            <br />
            Make tasks and organize yours itens to do.
          </p>
        </div>
      )}

      <div className={style.taskContainer}>
        {todos.map((data, key) => (
          <TodoItem key={key} data={data} dataIndex={key} />
        ))}
      </div>
    </div>
  );
};

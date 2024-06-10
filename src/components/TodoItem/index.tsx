import { TodoContext } from "../../contexts/TodoContext";
import { Todo } from "../../types/Todo";
import { ChangeEvent, useContext } from "react";
import styles from "./TodoItem.module.css";

type Props = {
  data: Todo;
  dataIndex: number;
};

export const TodoItem = ({ data, dataIndex }: Props) => {
  const { dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: { index: dataIndex },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_TODO",
      payload: {
        isDone: e.target.checked,
        index: dataIndex,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.isDoneContainer}>
        <input type="checkbox" checked={data.isDone} onChange={handleChange} />
      </div>

      <div
        className={`${styles.taskTitleContainer} ${
          data.isDone ? styles.taskDoneTitle : ""
        }`}
      >
        {data.title}
      </div>

      <div className={styles.deleteTaskContainer}>
        <button
          className={styles.deleteTaskBtn}
          onClick={handleDelete}
        ></button>
      </div>
    </div>
  );
};

import { TodoContext } from "../../contexts/TodoContext";
import { Button } from "../Button";
import { Input } from "../Input";
import style from "./Header.module.css";

import { useContext, useState } from "react";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleNewTask = () => {
    if (!inputValue) {
      alert("Write a valid title");
      return;
    }

    dispatch({
      type: "ADD_NEW_TODO",
      payload: {
        title: inputValue,
        isDone: false,
      },
    });
    setInputValue("");
  };

  return (
    <div className={style.container}>
      <div className={style.container}></div>

      <div className={style.newTaskContainer}>
        <div className={style.newTaskInput}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <Button onClick={handleNewTask} />
      </div>
    </div>
  );
};

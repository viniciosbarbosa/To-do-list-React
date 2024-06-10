import { TodoContext } from "../contexts/TodoContext";
import { useContext, useEffect, useState } from "react";

import { Todo } from "./../types/Todo";
import { AES, enc } from "crypto-js";

const SECRET_KEY = import.meta.env.SECRET_KEY as string;

const local_storage_key_name = "TODOS_DATABASE";

export const UseSaveTodos = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [dataInitial, setDataInitial] = useState(false);

  const handleChangesTodo = () => {
    if (!dataInitial) {
      const value = AES.encrypt(JSON.stringify(state), SECRET_KEY).toString();
      localStorage.setItem(local_storage_key_name, value);
    }

    useEffect(() => {
      try {
        const todoData = localStorage.getItem(local_storage_key_name);

        if (todoData) {
          const bytes = AES.decrypt(todoData, SECRET_KEY);

          const descryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8));

          dispatch({
            type: "ADD_NEW_TODO",
            payload: descryptedData,
          });
        }
      } catch {
        alert("Nao foi possivel salvar");
      }
      setDataInitial(true);
    }, []);
  };

  useEffect(() => {
    handleChangesTodo();
  }, [state]);
};

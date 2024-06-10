import { ChangeEvent } from "react";
import style from "./Input.module.css";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange }: Props) => {
  return (
    <div className={style.container}>
      <input value={value} onChange={onChange} placeholder="Add a new task" />
    </div>
  );
};

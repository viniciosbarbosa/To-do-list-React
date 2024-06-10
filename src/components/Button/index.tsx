import styles from "./Button.module.css";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        Add +
      </button>
    </div>
  );
};

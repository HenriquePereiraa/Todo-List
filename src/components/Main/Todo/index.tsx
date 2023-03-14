import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

interface TodoProps {
  task: string;
  finished: boolean;
}

export function Todo({ task, finished }: TodoProps) {
  return (
    <div className={styles.todoContainer}>
      <label className={styles.roundCheckbox}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.task}>
        {task}
      </p>
      <Trash weight="bold" />
    </div>
  );
}

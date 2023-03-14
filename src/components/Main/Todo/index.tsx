import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

interface TodoProps {
  task: string;
  finished: boolean;
  checkTask: (taskChecked: string) => void;
}

export function Todo({ task, finished, checkTask }: TodoProps) {
  function handleCheckedTask() {
    checkTask(task);
    console.log(task)
  }

  return (
    <div className={styles.todoContainer}>
      <label className={styles.roundCheckbox}>
        <input type="checkbox" onClick={handleCheckedTask} />
        <span
          className={styles.checkmark}
        ></span>
      </label>
      <p className={finished ? styles.todoChecked : styles.task}>{task}</p>
      <Trash weight="bold" />
    </div>
  );
}

import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

interface TodoProps {
  task: string;
  finished: boolean;
  checkTask: (taskChecked: string) => void;
  deleteTask: (taskToRemove: string) => void;
}

export function Todo({ task, finished, checkTask, deleteTask }: TodoProps) {
  function handleCheckedTask() {
    checkTask(task);
    console.log(task);
  }

  function handleRemoveTask() {
    deleteTask(task);
  }

  return (
    <div className={styles.todoContainer}>
      <label className={styles.roundCheckbox}>
        <input type="checkbox" onClick={handleCheckedTask} checked={finished} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={finished ? styles.todoChecked : styles.task}>{task}</p>
      <Trash weight="bold" onClick={handleRemoveTask} />
    </div>
  );
}

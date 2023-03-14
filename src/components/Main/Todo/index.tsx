import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

export function Todo() {
  return (
    <div className={styles.todoContainer}>
      <label className={styles.roundCheckbox}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.task}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash weight="bold" />
    </div>
  );
}

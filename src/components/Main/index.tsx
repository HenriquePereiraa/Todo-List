import styles from "./Main.module.css";
import { ClipboardText, PlusCircle } from "phosphor-react";
import { Todo } from "./Todo";

export function Main() {
  return (
    <div className={styles.main}>
      <form className={styles.mainForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={20} />{" "}
        </button>
      </form>

      <div className={styles.todoList}>
        <div className={styles.todoListHeader}>
          <div className={styles.todoInfos}>
            <strong className={styles.blue}>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className={styles.todoInfos}>
            <strong className={styles.purple}>Concluídas</strong>
            <span>0</span>
          </div>
        </div>

        <div className={styles.line}></div>

        {/* <div className={styles.emptyList}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas </strong>
          <span> Crie tarefas e organize seus itens a fazer</span>
        </div> */}

        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </div>
  );
}

import styles from "./Main.module.css";
import { ClipboardText, PlusCircle } from "phosphor-react";
import { Todo } from "./Todo";
import { FormEvent, useState } from "react";

interface Tasks {
  taskTitle: string;
  finished: boolean;
}

export function Main() {
  const [tasksList, setTasksList] = useState<Tasks[]>([]);

  const [task, setTask] = useState("");

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault();
    const newTask = {
      taskTitle: task,
      finished: false,
    };

    setTasksList((state) => [...state, newTask]);

    setTask("");
  }

  function changeTaskToDone(taskChecked: string) {
    const newTasksList = tasksList.map((task) => {
      if (task.taskTitle === taskChecked) {
        task.finished = !task.finished;
      }
      return task;
    });

    setTasksList(newTasksList);
  }

  function deleteTaskFromList(taskToRemove: string) {
    const newTaskList = tasksList.filter(
      (task) => task.taskTitle !== taskToRemove
    );

    setTasksList(newTaskList);
  }

  return (
    <div className={styles.main}>
      <form className={styles.mainForm}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddNewTask}>
          Criar <PlusCircle size={20} />
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

        {tasksList.length > 0 ? (
          <>
            {tasksList.map((task) => {
              return (
                <Todo
                  key={task.taskTitle}
                  task={task.taskTitle}
                  finished={task.finished}
                  checkTask={changeTaskToDone}
                  deleteTask={deleteTaskFromList}
                />
              );
            })}
          </>
        ) : (
          <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas </strong>
            <span> Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </div>
  );
}

import styles from './Main.module.css'

export function Main() {
  return (
    <div className={styles.main}>
        <form className={styles.mainForm}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>Criar</button>
        </form>
    </div>
  )
}

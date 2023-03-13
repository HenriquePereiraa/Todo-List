import styles from './Main.module.css'
import { PlusCircle } from 'phosphor-react'

export function Main() {
  return (
    <div className={styles.main}>
        <form className={styles.mainForm}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>Criar <PlusCircle size={20}/> </button>
        </form>
    </div>
  )
}

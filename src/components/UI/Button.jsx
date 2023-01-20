import { RiDeleteBinFill, RiCheckDoubleFill } from 'react-icons/ri'
import style from './Button.module.css'

const Button = ({ clearTodosList, completeAllTodos }) => {
  return (
    <div>
      {
        <>
          <RiDeleteBinFill
            className={style.actionButton}
            onClick={() => clearTodosList()}
            title="Видалити всі задачі"
          />
          <RiCheckDoubleFill
            className={style.actionButton}
            title="Виконати всі"
            onClick={() => completeAllTodos()}
          />
        </>
      }
    </div>
  )
}

export default Button

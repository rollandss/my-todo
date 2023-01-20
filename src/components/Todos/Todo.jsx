import style from './Todo.module.css'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
//, RiTodoFill

const Todo = ({ todo, deleteTodoHandler, togleTodoHandler, editTodo, text }) => {
  return (
    <div
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}
    >
      <div className={style.todoText} onDoubleClick={() => editTodo(todo.text)}>
        {todo.text}
      </div>
      <RiDeleteBin2Line
        className={`${style.togleIcon} ${
          !todo.isCompleted ? style.hideIcon : ''
        }`}
        onClick={() => deleteTodoHandler(todo.id)}
        title="видалити"
      />
      <FaCheck
        className={style.togleIcon}
        onClick={() => togleTodoHandler(todo.id)}
        title="виконати"
      />
      
    </div>
  )
}

export default Todo

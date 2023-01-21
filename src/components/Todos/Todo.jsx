import style from './Todo.module.css'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import randomColor from 'randomcolor'
import { useState } from 'react'

const Todo = ({ todo, deleteTodoHandler, togleTodoHandler, editTodo }) => {
  let color = randomColor()
  const [styleColor] = useState(color)

  return (
    <div
      style={{ backgroundColor: styleColor }}
      className={`${style.todo} ${todo.isCompleted ? style.completedTodo : ''}`}
    >
      <div className={style.todoText}>{todo.text}</div>
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

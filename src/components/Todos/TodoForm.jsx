import { useState } from 'react'
import style from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form className={style.todoFormContainer} onSubmit={onSubmitHandler}>
      <input
        placeholder="введіть задачу"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" title="додати задачу" >
     + 
      </button>
    </form>
  )
}

export default TodoForm

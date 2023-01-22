import { useState } from 'react'
import style from './TodoForm.module.css'
import randomColor from 'randomcolor'

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
        style={{ backgroundColor: randomColor() }}
        placeholder="тицяй сюди"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        title="додати задачу"
        className={!text ? style.buttonHidden : ''}
      >
        Додати
      </button>
    </form>
  )
}

export default TodoForm

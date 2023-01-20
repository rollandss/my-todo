import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = ({ todos, deleteTodoHandler, togleTodoHandler, editTodo, text }) => {
  return (
    <div className={style.todoList} >
      {!todos.length && <h2>Додай задачу</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodoHandler={deleteTodoHandler}
          togleTodoHandler={togleTodoHandler}
          editTodo={editTodo}
          text={text}
        />
      ))}
    </div>
  )
}

export default TodoList

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RiDeleteBinFill, RiCheckDoubleFill } from 'react-icons/ri'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
 
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const togleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const clearTodosList = () => {
    setTodos([])
  }

  const completeAllTodos = () => {
    setTodos(
      todos.map((todo) => (!0 ? { ...todo, isCompleted: true } : { ...todo }))
    )
  }



  return (
    <div className="App">
      <h1>Список задач</h1>
      <TodoForm addTodo={addTodoHandler} />
      <div>
        {!!todos.length && (
          <>
            <RiDeleteBinFill
              onClick={clearTodosList}
              title="Видалити всі задачі"
            />
            <RiCheckDoubleFill
              title="Виконати всі"
              onClick={completeAllTodos}
            />
          </>
        )}
      </div>

      <TodoList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        togleTodoHandler={togleTodoHandler}
      />
      <div>
        {!!todos.length && (
          <>
            Виконаних задач: {todos.filter((todo) => todo.isCompleted).length}
          </>
        )}
      </div>
    </div>
  )
}

export default App

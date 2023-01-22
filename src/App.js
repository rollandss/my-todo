import { useState, createRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'
import Button from './components/UI/Button'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
      nodeRef: createRef(null),
    }
    text.length ? setTodos([...todos, newTodo]) : setTodos([...todos])
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
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completeAllTodos = () => {
    setTodos(todos.map((todo) => ({ ...todo, isCompleted: true })))
  }

  return (
    <div className="App">
      <h1>Список задач</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <Button
          clearTodosList={clearTodosList}
          completeAllTodos={completeAllTodos}
        />
      )}

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

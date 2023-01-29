import { CSSTransition, TransitionGroup } from 'react-transition-group'
import randomColor from 'randomcolor'

import Todo from './Todo'
import style from './TodoList.module.css'
import './styles.css'


const TodoList = ({
  todos,
  deleteTodoHandler,
  togleTodoHandler,
 
}) => {
  
 
  return (
    <div className={style.todoList}>
      {!todos.length && <h2>Додай задачу</h2>}
      <TransitionGroup className="todo-list">
        {todos.map((todo) => (
          <CSSTransition
            key={todo.id}
            nodeRef={todo.nodeRef}
            timeout={600}
            classNames="item"
          >
            <div ref={todo.nodeRef}>
              <Todo
                color={randomColor()}
                className="remove-btn"
                todo={todo}
                deleteTodoHandler={deleteTodoHandler}
                togleTodoHandler={togleTodoHandler}
              ></Todo>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default TodoList

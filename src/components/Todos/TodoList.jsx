import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Todo from './Todo'
import style from './TodoList.module.css'
import './styles.css';

const TodoList = ({
  todos,
  deleteTodoHandler,
  togleTodoHandler,
  editTodo,
  text,
}) => {
  return (
    <div className={style.todoList}>
    {!todos.length && <h2>Додай задачу</h2>}
      <TransitionGroup className='todo-list'>
        
        {todos.map((todo) => (
          <CSSTransition
            key={todo.id}
            nodeRef={todo.nodeRef}
            timeout={500}
            classNames="item"
          >
          <div ref={todo.nodeRef}>

            <Todo
              // key={todo.id}
              className='remove-btn'
              todo={todo}
              deleteTodoHandler={deleteTodoHandler}
              togleTodoHandler={togleTodoHandler}
              editTodo={editTodo}
              text={text}
            >&times;</Todo>
          </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default TodoList

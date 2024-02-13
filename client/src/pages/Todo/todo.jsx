import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <div className='layo'>
        <FontAwesomeIcon className='icons' icon={faCheck} onClick={() => toggleComplete(task.id)}/> 
        <p className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <p className={`${task.completed ? 'completed' : ""}`}>{task.plantName}</p>
        </div>
        <FontAwesomeIcon className='icons trash' icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  )
}

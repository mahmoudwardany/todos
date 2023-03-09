import React from 'react'
import { Itask } from '../Itask'
type Props = {
   task:Itask;
   completeTask(taskNameToDelete: string): void;

}

const TodoTask = ({task,completeTask}: Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={()=>completeTask(task.taskName)}>X</button>
    </div>
  )
}
export default TodoTask
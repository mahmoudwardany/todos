import { FC,useState ,ChangeEvent} from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { Itask } from './Itask';


const App:FC=()=> {
  const [task, settask] = useState<string>('')
  const [dealine, setDeadline] = useState<number>(0)
  const [todosList, setTodos] = useState<Itask[]>([])
const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
if(event.target.name === 'task'){
  settask(event.target.value)
}else{
  setDeadline(Number(event.target.value))
}
}
const add=():void=>{
  const newTodos={taskName:task,deadline:dealine}
setTodos([...todosList,newTodos])
settask('')
setDeadline(0)
}
const completeTask=(taskNameToDelete:string):void=>{
  setTodos(
    todosList.filter((task)=> {
return task.taskName !== taskNameToDelete;
  })
  )
}
  

  return (
    <div className='App'>
   <div className="header">
    <div className="myInput">
      <input type={'text'}
       placeholder='YOUR TASK...'
        value={task} name='task'
        onChange={handleChange}/>
      <input type={'number'}
       placeholder='DEADLINE(IN DAYS)...'
        name='deadline'value={dealine}
         onChange={handleChange}/>
      </div>
<button onClick={add}>ADD TASK</button>
   </div>
   <div className='todoList'>
{todosList.map((task)=>(
  <TodoTask task={task} completeTask={completeTask} key={task.taskName}/>
))}
   </div>
    </div>
  );
}

export default App;

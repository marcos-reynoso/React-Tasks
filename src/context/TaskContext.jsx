import {createContext ,useState,useEffect} from 'react'
import { tasks as data} from "../data/tasks" 
export const TaskContext= createContext();
export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([])
  function createTasks(task){
    settasks( [...tasks,{
     title: task.title,
     id: task.length,
     description: task.description
    }])
   }
   function deleteTask(taskid){
    settasks(tasks.filter(task => task.id !== taskid))  
      }
      useEffect(()=>{
        settasks(data)
      },[])
    
  return (
    <TaskContext.Provider value={{
      tasks,
      createTasks,
    deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

import {useContext, useState} from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTasks}=useContext(TaskContext)
    const handleSubmit= (e)=>{
        e.preventDefault();
      console.log(title,description)
      createTasks({
        title,
        description,
      })
      setTitle("");
      setDescription("");
    }
  return (
   
     <div className='max-w-sm mx-auto'>
         <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
          
          <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
            <input placeholder="Escribe tu tarea"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            className='bg-slate-300 p-3 w-full mb-2'
            autoFocus
            />
            <textarea placeholder='Escribe la descripcion de la tarea'
            onChange={(e)=> setDescription(e.target.value)}
            className='bg-slate-300 p-3 w-full mb-2'
            value={description}
            ></textarea>
            <button className='bg-indigo-700 px-3 py-1 text-white'>
           
              Guardar</button>
        </form>
    
     </div>
  )
}

export default TaskForm
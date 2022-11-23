import "../styles/App.scss";
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true, id: '0' },
    { task: 'Hacer croquetas ricas', completed: true, id: '1' },
    { task: 'Ir a la puerta de un gimnasio', completed: false, id: '2 ' },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false, id: '3'
    },
  ]);
  const render = () => {
    return tasks.map((task) => {
      if (task.completed) {
        return (
          <li key={task.id} className='complete' id={task.id} onClick={handleclick} //PROBAR LO DE LA CLASE CON UN TERNARIO
          >
            {task.task}
          </li >
        );
      } else {
        return (
          <li key={task.id} id={task.id} onClick={handleclick}
          >
            {task.task}
          </li >
        );
      }
    });
  }
  const handleclick = (ev) => {
    const taskID = ev.target.id;
    console.log(taskID)
    const foundTask = tasks.find((task) => task.id === taskID);
    console.log(foundTask)
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  }


  return (
    <div className="App">
      <h1>mi lista de tareas</h1>
      <ul>{render()}</ul>
    </div>
  );
}
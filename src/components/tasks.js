import React, {useState, useEffect} from 'react';
import Description from './taskDescription';
import mockTasks from '../assets/mockTasks.json';

function Tasks(){
  const [tasks, setTasks] = useState([]);

  const _getTasks = () => {
     setTasks(mockTasks);

  }

  useEffect(_getTasks, []);

  return (
    <ul>
      {tasks.map( (task) =>
        <li key={task.id}>
          <details>
            <summary>
              <span>{task.title}</span>
              {/* <span className="task-status" id={task.id} onClick={_changeStatus}>{task.status}</span> */}
            </summary>
            <Description task={task} />
          </details>
        </li>
      )}
    </ul>
  )
}

export default Tasks;
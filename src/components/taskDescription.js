import React from 'react';

function Description(props) {
  let task = props.task || "";
  if(task.assignee === null || task.assignee === "Admin") {
    task.assignee = "None";
  }
  return (
    <section>
        <div key={task.id}>
          <span>Assigned To: {task.assignee}</span>
          <br></br>
          <span>{!task.description ? 'Task description goes here' : task.description }</span>
        </div>
    </section>
  )
}

export default Description;
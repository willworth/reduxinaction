import React from "react";

export default function Task(props) {
  return (
    <div className="task">
      <div className="task-header">
        <div>{props.task.title}</div>
      </div>
      <hr />
      <div className="taskbody">{props.task.description}</div>
    </div>
  );
}

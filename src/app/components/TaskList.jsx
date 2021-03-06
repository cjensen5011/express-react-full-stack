import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ tasks, name }) => (
  <div>
    <h3>{name}</h3>
    {tasks.map(task => (
      <div key={task.name}>{task.name}</div>
    ))}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter(tasks => tasks.group === groupId)
  };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);

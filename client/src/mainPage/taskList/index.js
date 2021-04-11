import React from 'react';
import PropTypes from 'prop-types';
import AllCategoryList from './components/allCategoryList/allCategoryList';
import styles from './index.styles.css';

const TaskListModule = ({
  userId, getAllTasks, addTask, tasks,
}) => (
  <div className={styles.TaskListModule}>
    <AllCategoryList
      tasks={tasks}
      currentUserId={userId}
      getAllTasks={getAllTasks}
      addTask={addTask}
    />
  </div>
);

export default TaskListModule;

TaskListModule.propTypes = {
  userId: PropTypes.number,
  getAllTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

TaskListModule.defaultProps = {
  userId: null,
  tasks: [],
};

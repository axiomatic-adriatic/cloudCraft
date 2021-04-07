import React from 'react';
import axios from 'axios';
import Header from './components/header/header';
import AllCategoryList from './components/allCategoryList/allCategoryList';

class TaskListModule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user_id, getAllTasks, addTask, tasks } = this.props;
    return (
      <div>
        <AllCategoryList
          tasks={tasks}
          currentUserId={user_id}
          getAllTasks={getAllTasks}
          addTask={addTask}
        />
      </div>
    );
  }
}

export default TaskListModule;

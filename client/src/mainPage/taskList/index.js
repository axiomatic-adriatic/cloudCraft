import React from 'react';
import Header from './components/header/header.jsx';
import AllCategoryList from './components/allCategoryList/allCategoryList.jsx';

class TaskListModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componenDidMount() {
    // get all tasks by user_id
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Header />
        <AllCategoryList tasks={tasks} />
      </div>
    );
  }
}

export default TaskListModule;

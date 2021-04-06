import React from 'react';
import axios from 'axios';
import Header from './components/header/header';
import AllCategoryList from './components/allCategoryList/allCategoryList';

class TaskListModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.getAllTasks = this.getAllTasks.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  componentDidMount() {
    this.getAllTasks();
  }

  getAllTasks() {
    const { user_id } = this.props;
    axios.get(`/tasks?user_id=${user_id}`)
      .then((resp) => {
        this.setState({
          tasks: [...resp.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addTask(textBody) {
    const { user_id } = this.props;
    const data = {
      user_id,
      task_text: textBody,
    };
    axios.post('/task', data)
      .then((resp) => {
        this.getAllTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { tasks } = this.state;
    const { user_id } = this.props;
    return (
      <div>
        <AllCategoryList
          tasks={tasks}
          currentUserId={user_id}
          getAllTasks={this.getAllTasks}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default TaskListModule;

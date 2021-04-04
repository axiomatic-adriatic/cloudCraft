import React from 'react';
import axios from 'axios';
import Header from './components/header/header';
import AllCategoryList from './components/allCategoryList/allCategoryList';

class TaskListModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentUserId: 2,
    };
  }

  componentDidMount() {
    axios.get('/tasks')
      .then((resp) => {
        this.setState({
          tasks: [...resp.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { tasks, currentUserId } = this.state;
    return (
      <div>
        <Header />
        <AllCategoryList tasks={tasks} currentUserId={currentUserId} />
      </div>
    );
  }
}

export default TaskListModule;

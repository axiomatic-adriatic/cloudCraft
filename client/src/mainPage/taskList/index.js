import React from 'react';
import Header from './components/header/header.jsx';
import AllCategoryList from './components/allCategoryList/allCategoryList.jsx';
import axios from 'axios';

class TaskListModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    // get all tasks by user_id
    axios.get('/tasks')
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          tasks: [...resp.data]
        })
      })
      .catch((err) => {
        console.log(err);
      })
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

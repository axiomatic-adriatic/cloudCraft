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
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(`/tasks?user_id=${user_id}`)
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          tasks: [...resp.data],
        });
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
        {/* <Header /> */}
        <AllCategoryList tasks={tasks} currentUserId={user_id} />
      </div>
    );
  }
}

export default TaskListModule;

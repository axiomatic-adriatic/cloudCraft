import React from 'react';
import Header from './components/header/header';

class TaskListModule extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default TaskListModule;

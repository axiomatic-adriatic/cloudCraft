import React from 'react';
import Header from './components/header/header.jsx';

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

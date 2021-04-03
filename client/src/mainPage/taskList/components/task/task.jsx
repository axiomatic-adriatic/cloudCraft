import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Username</p>
        <p>task text</p>
        <form>
           <input type="checkbox" id="vehicle1" name="vehicle1" value="Completed" />
        </form>
      </div>
    )
  }
}

export default Task;

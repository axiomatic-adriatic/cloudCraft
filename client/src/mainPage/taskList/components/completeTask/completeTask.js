import React from 'react';
import styles from './completeTask.css';

class CompleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      disabled: true,
    });
  }

  removeTaskInSpecifiedTime(seconds) {

  }

  render() {
    const { disabled } = this.state;
    return (
      <form className={styles.completeSection}>
        <label className={disabled ? styles.greenComplete : styles.regularComplete}>
          <input
            type="checkbox"
            name="completed"
            onChange={this.handleOnChange}
            disabled={disabled}
          />
          Completed
        </label>
      </form>
    )
  }
}

export default CompleteTask;

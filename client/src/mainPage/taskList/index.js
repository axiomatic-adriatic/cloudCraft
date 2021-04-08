import React from 'react';
import AllCategoryList from './components/allCategoryList/allCategoryList';
import styles from './index.styles.css';

const TaskListModule = ({ user_id, getAllTasks, addTask, tasks }) => (
  <div className={styles.TaskListModule}>
    <AllCategoryList
      tasks={tasks}
      currentUserId={user_id}
      getAllTasks={getAllTasks}
      addTask={addTask}
    />
  </div>
);

// class TaskListModule extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { user_id, getAllTasks, addTask, tasks } = this.props;
//     return (
//       <div>
//         <AllCategoryList
//           tasks={tasks}
//           currentUserId={user_id}
//           getAllTasks={getAllTasks}
//           addTask={addTask}
//         />
//       </div>
//     );
//   }
// }

export default TaskListModule;
